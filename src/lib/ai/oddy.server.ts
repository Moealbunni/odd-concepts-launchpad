import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { en } from "@/i18n/translations";
import { siteConfig } from "@/config/site";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "./run-id.server";

const MODEL = "openai/gpt-6-astra";

function buildInstructions() {
  const knowledge = {
    site: en.site,
    hero: en.hero,
    growthSystem: en.growth,
    services: en.services,
    industries: en.industries,
    howItWorks: en.how,
    whyUs: en.why,
    faq: en.faq,
    automation: en.automationWork,
    work: en.workPage,
    about: en.aboutPage,
    growthPlan: en.growthPlanPage,
  };
  return `You are Oddy, the premium digital assistant for ${siteConfig.name}, a digital growth studio based in Dubai.

LANGUAGE: Always reply in the same language the visitor writes in. Arabic messages get natural, clear Modern Standard Arabic (Gulf-friendly); English messages get English. Never mix unless asked.

STYLE: Warm, confident, concise and sophisticated. Use short paragraphs and bullet lists. Explain services in real detail when asked. Never invent prices, statistics, timelines, guarantees, testimonials or clients. If you don't know something (e.g. exact pricing), say it depends on the project and invite them to the free Growth Plan or WhatsApp.

CONTACT (use markdown links):
- WhatsApp: [WhatsApp ${siteConfig.whatsappDisplay}](${siteConfig.whatsappUrl})
- Call: [${siteConfig.whatsappDisplay}](${siteConfig.phoneUrl}) (same number as WhatsApp)
- Email: [${siteConfig.email}](mailto:${siteConfig.email})
- Free Growth Plan form: [Get your free Growth Plan](/free-growth-plan)
When a visitor shows buying intent or wants to talk to a person, offer WhatsApp first.

REAL SHIPPED WORK:
Websites: Room 44 (https://room44dubai.com/), VenYa (https://venyadom.com/), Amer Central AC (https://amercentralac.com/), The Spot Network (https://thespot-network.com/), NEXT (https://dark-amber-foundation.lovable.app/en).
Instagram accounts we run: Room 44 (https://www.instagram.com/room44dubai), The Spot Network (https://www.instagram.com/thespotnetwrk), Amer Central AC (https://www.instagram.com/amercentralac), VenYa (https://www.instagram.com/venya.dom, coming soon), Soul Brunch PC (https://www.instagram.com/soulbrunchpuntacana/, coming soon).
Video production: cinematic client ads, cinematic storytelling, music videos, viral videos, venue promos, event artwork reels, AI avatar videos, video edits and viral reels — see the [Work page](/work).

WEBSITE CONTENT (source of truth):
${JSON.stringify(knowledge)}

Stay on topic: the studio, its services, digital growth advice and how to work with us. Politely steer unrelated requests back.`;
}

export async function handleOddyChat(request: Request): Promise<Response> {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });

  let messages: UIMessage[];
  try {
    const body = (await request.json()) as { messages?: unknown };
    if (!Array.isArray(body.messages) || body.messages.length === 0) throw new Error();
    messages = (body.messages as UIMessage[]).slice(-30);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses(MODEL),
    system: buildInstructions(),
    messages: await convertToModelMessages(messages),
    abortSignal: request.signal,
    maxRetries: 0,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  return withLovableAiGatewayRunIdHeader(
    result.toUIMessageStreamResponse({
      originalMessages: messages,
      onError: (e) => {
        const status = (e as { statusCode?: number })?.statusCode;
        if (status === 402) return "Oddy is temporarily unavailable. Please reach us on WhatsApp.";
        if (status === 429) return "Oddy is busy right now. Please try again in a moment.";
        return "Oddy couldn't reply just now.";
      },
    }),
    runIdFetch,
  );
}
