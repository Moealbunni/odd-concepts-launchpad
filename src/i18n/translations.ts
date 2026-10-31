/**
 * Bilingual content source of truth (English / Arabic).
 *
 * `en` defines the shape; `ar` must match it exactly (enforced by the
 * `Translations` type). Consumers read the resolved object via
 * `useLanguage().t` — e.g. `t.hero.subhead`.
 *
 * Proper nouns (client names, brand name, email) are intentionally NOT
 * translated.
 */

/** Dedicated service pages — kept as a literal so <Link to=...> stays type-safe. */
export type ServiceLink = "/services/ai-outreach";

export interface ServiceItem {
  name: string;
  line: string;
  detail: string;
  /** Set when the service has its own page. */
  link?: ServiceLink;
}

export const en = {

  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    growthPlan: "Free Growth Plan",
    privacy: "Privacy",
    terms: "Terms",
  },
  site: {
    tagline: "Premium Digital Growth Studio",
    positioning:
      "A premium digital growth partner helping businesses turn attention into customers.",
    primaryCta: "Get Your Free Growth Plan",
    whatsappCta: "WhatsApp Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    whatsappAria: "Message us on WhatsApp",
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "Digital growth studio · Dubai",
    h1: "We don’t just build websites. We build the system that ",
    h1Gradient: "brings you customers.",
    subhead:
      "Premium websites, sharper visibility and modern content — designed and run as one system that turns attention into enquiries and customers.",
    secondaryLink: "See the Growth System",
    or: "or",
    whatsappInline: "message us on WhatsApp",
    reassurance: "No inflated claims · No borrowed proof · Built with care in Dubai",
    captionSmall: "UAE Today",
    captionLarge: "World Wide Tomorrow",
    skylineAlt:
      "Dubai skyline at night with the Burj Khalifa and glowing light trails",
  },
  reality: {
    eyebrow: "The reality",
    title:
      "You’re great at what you do. Online, the business that shows up first wins.",
    p1: "Most customers choose whoever they find and trust first — not always the best option, just the easiest to find and the most convincing at a glance.",
    p2: "If you’re hard to find or easy to overlook, you lose them before you ever get the chance to compete.",
    imageAlt:
      "Dubai city street at night with blue light trails rising between towers",
  },
  growth: {
    eyebrow: "The Growth System",
    title: "One connected system — from invisible to ",
    titleGradient: "growing",
    titleAfter: ".",
    subtitle:
      "Six stages, one engine. Each stage builds on the last — turning quiet visibility into a business that grows on its own.",
    button: "Map this system to your business",
    note: "Free Growth Plan — no pressure, no obligation.",
    aria: "Growth system diagram: six connected stages that turn attention into growth — Visibility, Trust, Preference, Capture, Response, Growth.",
    stagesAria: "Growth system stages",
    stages: [
      {
        n: "01",
        name: "Visibility",
        verb: "Get found",
        line: "When people search, you’re the one they find.",
      },
      {
        n: "02",
        name: "Trust",
        verb: "Look premium",
        line: "A first impression that makes you the obvious choice.",
      },
      {
        n: "03",
        name: "Preference",
        verb: "Get chosen",
        line: "Reputation and content that tip the decision your way.",
      },
      {
        n: "04",
        name: "Capture",
        verb: "Get the enquiry",
        line: "Make it effortless to take the next step.",
      },
      {
        n: "05",
        name: "Response",
        verb: "Never miss a lead",
        line: "Every enquiry answered, day or night.",
      },
      {
        n: "06",
        name: "Growth",
        verb: "Grow on autopilot",
        line: "One visit becomes repeat, compounding revenue.",
      },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Everything that turns attention into customers — connected.",
    subtitle:
      "Most agencies sell you a single service and leave you to join the dots. We design and run one system — every part below plugs into a stage of your growth.",
    seeAll: "See all services",
    expandMore: "Expand for more",
    showLess: "Show less",
    learnMore: "Learn more",

    items: [
      {
        name: "Premium Websites",
        line: "A fast, modern site that makes the right first impression.",
        detail: "We design, build and launch your site — copy, mobile layout, speed, SEO basics and enquiry forms that land straight in your inbox.",
      },
      {
        name: "Google Business Profile",
        line: "Show up where local customers are already searching.",
        detail: "We set up and optimise your profile — categories, photos, posts and keywords — so you rank in Maps and local search.",
      },
      {
        name: "Review Management",
        line: "Build trust before a single conversation happens.",
        detail: "We set up simple review requests after every visit and help you reply professionally, so your rating keeps climbing.",
      },
      {
        name: "UGC Content",
        line: "Real, relatable content that keeps your brand top of mind.",
        detail: "We script and produce creator-style videos and photos that feel native on Instagram and TikTok — ready to post or run as ads.",
      },
      {
        name: "Video Advertising",
        line: "Short-form videos that stop the scroll and sell the outcome.",
        detail: "From concept and script to shoot and edit, we produce cinematic ads and reels cut for every platform and format.",
      },
      {
        name: "AI Avatar Videos",
        line: "Polished brand videos at a pace and cost that scales.",
        detail: "We create realistic AI presenters that speak for your brand in English and Arabic — no studio, no reshoots.",
      },
      {
        name: "Paid Ads",
        line: "Meta, TikTok, Google and the new ChatGPT Ads — one strategy, every platform.",
        detail: "We plan, launch and manage your campaigns across Facebook & Instagram, TikTok, Google and ChatGPT ads — targeting, creative, budgets and weekly optimisation.",
      },
      {
        name: "AI Automation & LLMs",
        line: "Put AI to work inside your business.",
        detail: "We build custom AI assistants and LLM workflows trained on your business — answering questions, drafting content, sorting data and handling repetitive tasks.",
      },
      {
        name: "Business Automation",
        line: "WhatsApp, Instagram, AI receptionist, CRM — all running on their own.",
        detail: "We automate WhatsApp and Instagram replies, add an AI receptionist that books and qualifies leads 24/7, and connect your CRM and follow-ups so nothing slips.",
      },
      {
        name: "Customer Support Chatbots",
        line: "Helpful, on-brand answers with a smooth handover to your team.",
        detail: "We build support chatbots around your FAQs, policies and business knowledge, connecting your website, WhatsApp or Instagram through n8n workflows. They answer routine questions, collect context and route complex requests to the right person — with clear limits on what the AI can handle.",
      },
      {
        name: "Lead Qualification Workflows",
        line: "Turn incoming enquiries into organised, sales-ready conversations.",
        detail: "We build n8n workflows that capture enquiries from forms, ads and messaging, ask relevant qualifying questions and score leads against your criteria. Qualified leads go into your CRM with their context, assigned follow-ups and booking steps, while your team reviews exceptions.",
      },
      {
        name: "AI Outreach Autopilot",
        line: "Find ideal customers. Start conversations. Automate follow-ups.",
        detail: "We build targeted customer lists, write outreach in your brand’s voice and automate follow-ups. Replies are organised so your team can focus on interested leads — with your approval and clear sending limits.",
        link: "/services/ai-outreach",
      },

      {
        name: "Invoice & Document Processing",
        line: "Less manual entry. Clearer approvals. Documents where they belong.",
        detail: "We connect your inbox, uploads and business tools with n8n to extract invoice and document data, check required fields and flag duplicates or uncertain entries. Records are routed for approval, synced to your accounting or CRM tools and filed with a traceable history — keeping your team in control.",
      },
      {
        name: "Apps",
        line: "Custom mobile and web apps that extend your reach.",
        detail: "We design and build iOS, Android and web apps — bookings, loyalty, ordering or member portals — tailored to how your customers use you.",
      },
      {
        name: "Software Creation",
        line: "Custom software built around how you actually work.",
        detail: "We build internal tools, dashboards, portals and platforms from scratch — replacing spreadsheets and off-the-shelf tools that don’t fit.",
      },
      {
        name: "Business Intelligence",
        line: "Clear dashboards that show what’s actually driving growth.",
        detail: "We connect your ads, website, sales and CRM data into one dashboard, so you see what’s working and where to spend next.",
      },
    ] as ServiceItem[],
  },
  aiOutreach: {
    eyebrow: "AI Outreach Autopilot",
    title: "New enquiries, ",
    titleGradient: "without the chase.",
    subtitle:
      "We find your ideal customers, contact them for you, and handle the follow-up — so new enquiries keep arriving without you chasing anyone.",
    backToServices: "Back to services",
    stepsEyebrow: "How it works",
    stepsTitle: "Four steps. Then it runs.",
    steps: [
      {
        title: "We define your ideal customer",
        detail: "We map the businesses, roles and areas that actually buy from you, then build a clean, verified list — no scraped dumps, no blasts to strangers.",
      },
      {
        title: "We write and send the outreach",
        detail: "Personalised messages in your brand's voice, sent from your own domain across email, WhatsApp or LinkedIn, at a pace that protects your sender reputation.",
      },
      {
        title: "We handle the follow-up",
        detail: "Every reply is read and sorted: questions answered, interest booked in, and a polite nudge for anyone who hasn't replied. You only see the ones worth your time.",
      },
      {
        title: "You take it from there",
        detail: "Qualified enquiries land in your inbox or CRM with the full context, so you walk into a warm conversation instead of a cold call.",
      },
    ],
    includedEyebrow: "What's included",
    includedTitle: "Everything, handled.",
    included: [
      "Ideal-customer list building and verification",
      "Message copy in your brand voice — English and Arabic",
      "Sending from your own domain and numbers",
      "Reply handling, sorting and booking",
      "Follow-up sequences with clear stop rules",
      "A weekly summary: sent, replied, booked",
    ],
    guardEyebrow: "Good to know",
    guardTitle: "No spam. No promises we can't keep.",
    guards: [
      "You own the lists and the accounts — everything we build stays yours.",
      "Nothing is sent until you approve the list and the copy.",
      "We send at human volumes from verified domains, and opt-outs are respected immediately.",
      "Results depend on your offer, the list and the market — we won't promise you a number.",
    ],
  },
  industries: {

    eyebrow: "Who we build for",
    title: "We speak your industry — not “business in general”.",
    subtitle:
      "We work with ambitious local businesses that rely on trust, reputation and a steady flow of new customers.",
    closing: "And any local business that deserves more customers than it’s getting.",
    items: [
      {
        name: "Cafés & Restaurants",
        line: "Fill quiet tables and turn first-time guests into regulars.",
      },
      {
        name: "Salons & Barbers",
        line: "Keep the chairs full and the calendar booked.",
      },
      {
        name: "Dental Clinics",
        line: "Become the practice patients trust before they call.",
      },
      {
        name: "Medical & Wellness",
        line: "Turn quiet searches into booked appointments.",
      },
      {
        name: "Gyms & Studios",
        line: "Attract members who actually stay.",
      },
      {
        name: "Real Estate",
        line: "Get in front of buyers and sellers first.",
      },
      {
        name: "Accounting & Finance",
        line: "Win clients who value expertise over price.",
      },
      {
        name: "Law Firms",
        line: "Be the firm clients choose with confidence.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Simple to start. Built to last.",
    subtitle:
      "A clear, three-step path from where you are now to a system that brings you customers.",
    steps: [
      {
        title: "Get your free Growth Plan",
        line: "We review how easily customers find you, how much you’re trusted at a glance, and where enquiries slip away.",
      },
      {
        title: "We build your system",
        line: "Website, profiles, content and lead capture — designed and connected as one, not bolted together.",
      },
      {
        title: "You grow",
        line: "We run it and keep improving it, so you can focus on your business.",
      },
    ],
  },
  why: {
    eyebrow: "About us",
    title: "A studio, not an agency.",
    subtitle: "Deliberately small, so clients work directly with the people doing the work.",
    p1: "Odd Concepts Digital is a boutique digital growth studio in Dubai. We stay small by design: you talk to the strategist and the builder, not an account manager three layers deep.",
    p2: "AI is our accelerator, not our product. It helps us move faster, write sharper, and build systems that work — but every decision is made by a human who cares about your business.",
    cardHeading: "What matters here",
    imageAlt: "Museum of the Future illuminated at night in Dubai",
    items: [
      {
        title: "Based in Dubai",
        line: "A boutique digital growth studio working with ambitious local businesses across the UAE.",
      },
      {
        title: "What we sell",
        line: "Growth, trust, visibility and customers — not just websites, AI or ads in isolation.",
      },
      {
        title: "Our promise",
        line: "No invented clients, borrowed logos or made-up numbers. Everything here is honest.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Straight answers.",
    items: [
      {
        q: "What does it cost?",
        a: "It’s priced to what you actually need. We don’t sell one-size-fits-all packages. The Growth Plan is free, and after that we recommend the right work for your goals and budget.",
      },
      {
        q: "How much of my time will this take?",
        a: "Very little. We do the heavy lifting — reviews, design, build, content and setup. You just need to answer a few questions, give us access, and approve the work.",
      },
      {
        q: "What kind of results can I expect?",
        a: "No one can honestly promise specific numbers. What we do is fix the specific reasons customers aren’t finding you, trusting you, or choosing you — then keep improving it.",
      },
      {
        q: "What industries do you work with?",
        a: "Local businesses where reputation and first impressions matter: hospitality, cafés, restaurants, salons, barbers, gyms, dental and medical clinics, real estate, accounting, law and professional services.",
      },
      {
        q: "What is the free Growth Plan?",
        a: "A free review of your visibility, reputation and conversion. You get the gaps we found, the fixes we recommend, and what it would take to put them in place — no cost, no obligation.",
      },
      {
        q: "What makes you different?",
        a: "We build and run one connected system, not a list of separate services. And we use AI as an accelerator behind the scenes — not as a shiny feature to sell you.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to stop guessing and start ",
    headingGradient: "growing?",
    subtitle: "Get your free Growth Plan. No cost, no obligation, no pressure.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Not a menu. ",
    titleGradient: "One connected system.",
    subtitle:
      "Every service below plugs into a stage of your growth — visibility, trust, preference, capture, response and growth. You can start with the piece that hurts most; we design the rest so it fits.",
  },
  workPage: {
    eyebrow: "Work",
    title: "Proof is in the ",
    titleGradient: "work",
    titleAfter: ".",
    subtitle:
      "Live client websites, Instagram accounts we run, and real production work — alongside the intelligent systems we build for businesses.",
  },
  automationWork: {
    eyebrow: "LLMs & business automation",
    title: "Intelligence beyond the website.",
    subtitle: "We build LLM-powered workflows around your business knowledge, customer conversations and everyday operations.",
    items: [
      { title: "Custom LLM workflows", detail: "Connect your documents and business knowledge to AI assistants that answer questions, draft responses and organise information — with human review where it matters." },
      { title: "WhatsApp automation", detail: "Turn enquiries into structured conversations: answer common questions, qualify leads, collect booking details and hand over to your team when needed." },
      { title: "Connected business operations", detail: "Link WhatsApp, Instagram, forms and your CRM to route enquiries, trigger follow-ups and reduce repetitive admin across your business." },
    ],
  },
  clientSites: {
    eyebrow: "Live client work",
    title: "Sites we’ve shipped.",
    subtitle: "Real client websites, live and in use today.",
    detail:
      "These are not normal websites. Every site we build runs on a custom front-end, a connected back-end, an AI website assistant that talks to your visitors and generates leads — so the website itself brings in business.",
    /** `{name}` is replaced with the (untranslated) client name. */
    visitAria: "Visit {name} website (opens in new tab)",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Accounts we run.",
    subtitle: "Live Instagram accounts we build, run and grow for our clients.",
    /** `{name}` is replaced with the (untranslated) account name. */
    followAria: "Open {name} on Instagram (opens in new tab)",
    comingSoon: "Coming soon",
  },
  appsWork: {
    eyebrow: "Apps",
    title: "arOund",
    subtitle: "Discover · Swipe · Map",
    imageAlt: "Three arOund app screens side by side: event discovery, swipe and map",
  },
  media: {
    eyebrow: "Studio output",
    title: "Cinematic & reels.",
    subtitle: "Real production work — organized by format.",
    tabCinematic: "Cinematic",
    tabReels: "Reels",
    filterAll: "All",
    categories: {
      ads: "Ads", storytelling: "Storytelling", promos: "Company Promos", venuePromos: "Venue Promos", avatar: "Avatars",
      videoEdits: "Video Edits", eventArtwork: "Event Artwork", viral: "Viral", shoots: "Shoots", musicVideo: "Music Video",
      musicPromo: "Music Promos",
    },
    showMore: "Show more",
    showLess: "Show less",
    titles: {
      "m-verajordan": "Vera Tulum — Jordan John",
      "m-veraandor": "Vera Tulum — Andor Gabriel",
      "m-clientad": "Client Ad",
      "m-clientad2": "Client Ad II",
      "m-cinead1": "Cinematic Ad I",
          "m-cinead2": "Cinematic Ad II",
          "m-spotad": "Cinematic Ad III",
      "m-musicvideo": "Music Video",
      "m-room44": "Venue Promo",
      "m-amer": "Company Mascot & Storyline",
      "m-viral": "Viral Video Ideas",
      "m-winter": "Viral Video",
      "m-4429": "Cinematic Realism — Story Telling",
      "m-4745": "Company Promo I",
      "m-5217": "Company Promo II",
      "m-4744": "Company Promo III",
      "m-4693": "Company Promo IV",
      "m-5015": "Venue Photoshoot",
      "m-room44reel": "Venue Promo",
      "m-4519": "Story Telling",
      "m-3761": "Futuristic Promo",
      "m-3694": "Modeling Photoshoot",
      "m-4062": "Cinematic Story Telling I",
      "m-4370": "Cinematic Story Telling II",
      "m-cinestory3": "Cinematic Story Telling III",
      "m-cinestory4": "Cinematic Story Telling IV",
      "m-cinestory5": "Cinematic Story Telling V",
      "m-4378": "Instagram Virality — Cinematic Shoot",
      "m-evart1": "Event Artwork I",
      "m-evart2": "Event Artwork II",
      "m-evart3": "Event Artwork III",
      "m-evart4": "Event Artwork IV",
      "m-evart5": "Event Artwork V",
      "m-viralreel1": "Viral Reel I",
      "m-viralreel2": "Viral Reel II",
      "m-viralreel3": "Viral Reel III",
      "m-avatar1": "Avatar I",
      "m-videoedits": "Video Edits",
      "m-avatar2": "Avatar II",
      "m-avatar3": "Avatar III",
      "m-musicpromo1": "Music Promo I",
      "m-musicpromo2": "Music Promo II",
    } as Record<string, string>,
  },
  aboutPage: {
    eyebrow: "About",
    title: "A small studio with a ",
    titleGradient: "clear point of view",
    titleAfter: ".",
    subtitle:
      "Odd Concepts Digital is a Dubai-based growth studio for ambitious local businesses. We design and run one connected system — websites, visibility, content and response — so attention turns into enquiries and enquiries turn into customers.",
    p1: "Everything on this site is our own work: live client websites, Instagram accounts we run, and real production. We build and operate the whole system for our clients — that’s the proof we stand behind.",
    p2: "We work best with owners who care about the details, want a partner rather than a vendor, and would rather grow steadily on a solid foundation than chase a shortcut. If that sounds like you, the free Growth Plan is the easiest way to start.",
    imageAlt: "Aerial night view of Palm Jumeirah lit up in blue and purple",
  },
  growthPlanPage: {
    eyebrow: "Free Growth Plan",
    title: "A clear plan for how to ",
    titleGradient: "grow your business",
    titleAfter: ".",
    subtitle:
      "Tell us a little about your business. We'll review it carefully and come back with a Growth Plan tailored to you — no cost, no obligation, no pressure.",
  },
  form: {
    businessTypes: {
      "Café / Restaurant": "Café / Restaurant",
      "Salon / Barber": "Salon / Barber",
      Dental: "Dental",
      "Medical / Wellness": "Medical / Wellness",
      "Gym / Studio": "Gym / Studio",
      "Real Estate": "Real Estate",
      "Accounting / Finance": "Accounting / Finance",
      Law: "Law",
      Other: "Other",
    } as Record<string, string>,
    yourName: "Your name",
    businessName: "Business name",
    email: "Email",
    phone: "Phone / WhatsApp",
    businessType: "Business type",
    website: "Current website",
    optional: "Optional",
    about: "Tell us about your business",
    aboutHint: "Optional — anything that helps us understand you",
    needs: "What do you need help with?",
    selectPlaceholder: "Select one…",
    submitIdle: "Get My Free Growth Plan",
    submitSending: "Sending…",
    formNote: "No spam · No pressure · Just a clear next step",
    doneTitle: "Request received.",
    doneBody:
      "We’ll review your business carefully and get back to you shortly with a clear, honest Growth Plan.",
    failedTitle: "Almost there.",
    failedBody:
      "We couldn’t send your details automatically just now. Please reach us on WhatsApp or email — your answers are ready to send in one tap.",
    talkWhatsapp: "Talk on WhatsApp",
    emailDirect: "Or email us directly",

    validation: {
      nameRequired: "Please tell us your name",
      businessNameRequired: "Business name is required",
      emailInvalid: "Enter a valid email",
      phoneInvalid: "Enter a valid phone or WhatsApp number",
      businessTypeInvalid: "Choose the closest match",
      urlInvalid: "Enter a valid URL",
      needsTooShort: "A sentence or two is enough",
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "How we handle your information.",
    subtitle: "Plain-English summary of what we collect, why, and what we don't do.",
    collectH: "What we collect.",
    collectB:
      "When you submit the Growth Plan form, we receive the details you enter — your name, business name, email, phone/WhatsApp, business type, optional website and what you need help with. That’s it.",
    whyH: "Why.",
    whyB: "Solely so we can read your enquiry and reply to you. We don’t sell, rent or share your details with third parties.",
    storedH: "How it’s stored.",
    storedB:
      "Enquiries are delivered to us by email. We keep them only for as long as needed to help you — you can ask us to delete yours at any time.",
    cookiesH: "Cookies & advertising measurement.",
    cookiesB:
      "With your permission where required by law, this site uses the Meta (Facebook) Pixel to measure how visitors use the site — such as which pages are viewed — and to measure and improve our advertising on Facebook and Instagram. It may set cookies and receive data such as pages visited and actions taken here. Visitors in regions that require consent are measured only after accepting via our cookie banner; you can change your choice any time through “Cookie settings” in the footer or by contacting us.",
    choicesH: "Your choices.",
    choicesB: "To request access, correction or deletion of your data, email us at",
    disclaimer:
      "This is a plain-language summary, not a legal contract. If your business has specific compliance requirements, please get in touch and we’ll be glad to help.",
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of use.",
    subtitle: "The short version — no surprises.",
    siteH: "This site.",
    siteB:
      "The Odd Concepts Digital website is provided for information and enquiry only. Content, wording, visuals and structure are ours — please don’t copy or reuse them without asking.",
    workShownH: "Work shown.",
    workShownB:
      "Work shown on this site is our own production, alongside live client websites and Instagram accounts we build and run.",
    growthPlanH: "Growth Plan.",
    growthPlanB:
      "The Growth Plan is offered free of charge with no obligation. It reflects our honest opinion at the time of writing and is not a guarantee of results.",
    liabilityH: "Liability.",
    liabilityB:
      "We take reasonable care with the information on this site, but we can’t accept liability for decisions made purely on the basis of pages here. Anything binding will always be set out in writing when we engage.",
    contactH: "Contact.",
    contactB: "Questions? Email",
  },
  oddy: {
    name: "Oddy",
    role: "Your Odd Concepts guide",
    open: "Ask Oddy",
    close: "Close Oddy",
    greeting: "Hi, I'm Oddy. Ask me anything about our services, work, pricing approach or how to start — in English or Arabic.",
    placeholder: "Ask about websites, ads, automation…",
    thinking: "Oddy is thinking…",
    reset: "Clear chat",
    minimize: "Minimize",
    clearConfirm: "Would you really like to clear the chat?",
    clearYes: "Yes, clear",
    clearNo: "Cancel",
    error: "Oddy couldn't reply just now. Please try again, or message us on WhatsApp.",
    suggestions: ["What services do you offer?", "Tell me about AI automation", "How do I get started?"],
  },
  footer: {
    call: "Call",
    whatsappButton: "Chat on WhatsApp",
    instagramButton: "Follow us on Instagram",
    contact: "Contact",
    explore: "Explore",
    readyToGrow: "Ready to grow?",
    rightsReserved: "All rights reserved.",
  },
  consent: {
    title: "Cookies & privacy.",
    body: "With your permission, we use a small cookie (the Meta Pixel) to measure how visitors use this site and to improve our ads on Facebook and Instagram. You can accept or decline — the site works the same either way.",
    accept: "Accept",
    reject: "Decline",
    privacyLink: "Privacy policy",
    settings: "Cookie settings",
  },
};

export type Translations = typeof en;

export const ar: Translations = {
  nav: {
    home: "الرئيسية",
    services: "خدماتنا",
    work: "أعمالنا",
    about: "من نحن",
    growthPlan: "خطة النمو المجانية",
    privacy: "الخصوصية",
    terms: "الشروط",
  },
  site: {
    tagline: "استوديو النمو الرقمي المتميز",
    positioning:
      "شريك نمو رقمي متميز يساعد الأعمال على تحويل الاهتمام إلى عملاء.",
    primaryCta: "احصل على خطة نموك المجانية",
    whatsappCta: "تواصل عبر واتساب",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    whatsappAria: "راسلنا عبر واتساب",
    languageLabel: "اللغة",
  },
  hero: {
    eyebrow: "استوديو النمو الرقمي · دبي",
    h1: "نحن لا نكتفي ببناء المواقع الإلكترونية. نحن نبني النظام الذي ",
    h1Gradient: "يجلب لك العملاء.",
    subhead:
      "مواقع إلكترونية متميزة، ظهور أقوى ومحتوى عصري — مصممة لتعمل كنظام واحد يحوّل الاهتمام إلى استفسارات وعملاء.",
    secondaryLink: "شاهد نظام النمو",
    or: "أو",
    whatsappInline: "راسلنا عبر واتساب",
    reassurance: "لا ادعاءات مبالغ فيها · لا نعتمد على سمعة مستعارة · نُبنى بعناية في دبي",
    captionSmall: "الإمارات اليوم",
    captionLarge: "والعالم غدًا",
    skylineAlt: "أفق دبي ليلاً مع برج خليفة وخطوط الإضاءة المتوهجة",
  },
  reality: {
    eyebrow: "الواقع",
    title: "أنتم بارعون فيما تفعلونه. أونلاين، من يظهر أولاً هو من يفوز.",
    p1: "معظم العملاء يختارون أول من يجدونه ويثقون به — وليس بالضرورة الأفضل، بل الأسهل في الوصول والأكثر إقناعًا للوهلة الأولى.",
    p2: "إذا كان من الصعب إيجادكم أو من السهل تجاهلكم، فإنكم تخسرون هؤلاء العملاء قبل أن تحصلوا على فرصة المنافسة أصلاً.",
    imageAlt: "شارع في دبي ليلاً مع خطوط إضاءة زرقاء ترتفع بين الأبراج",
  },
  growth: {
    eyebrow: "نظام النمو",
    title: "نظام واحد متكامل — من الغياب إلى ",
    titleGradient: "النمو",
    titleAfter: ".",
    subtitle:
      "ست مراحل، محرك واحد. كل مرحلة تبني على سابقتها — لتحويل الظهور الهادئ إلى عمل ينمو من تلقاء نفسه.",
    button: "طبّق هذا النظام على عملك",
    note: "خطة النمو المجانية — بلا ضغط، وبلا التزام.",
    aria: "مخطط نظام النمو: ست مراحل مترابطة تحوّل الاهتمام إلى نمو — الظهور، الثقة، التفضيل، الالتقاط، الاستجابة، النمو.",
    stagesAria: "مراحل نظام النمو",
    stages: [
      {
        n: "01",
        name: "الظهور",
        verb: "كونوا الأسهل إيجادًا",
        line: "عندما يبحث الناس، تكونون أنتم من يجدونه.",
      },
      {
        n: "02",
        name: "الثقة",
        verb: "اظهروا بمظهر متميز",
        line: "انطباع أول يجعلكم الخيار الواضح.",
      },
      {
        n: "03",
        name: "التفضيل",
        verb: "كونوا الخيار المفضل",
        line: "سمعة ومحتوى يخلّون الناس يختارونكم.",
      },
      {
        n: "04",
        name: "الالتقاط",
        verb: "احصلوا على الاستفسار",
        line: "اجعلوا الخطوة التالية سهلة بلا أي جهد.",
      },
      {
        n: "05",
        name: "الاستجابة",
        verb: "لا تفوتوا أي عميل محتمل",
        line: "نرد على كل استفسار، ليلاً أو نهارًا.",
      },
      {
        n: "06",
        name: "النمو",
        verb: "انموا تلقائيًا",
        line: "زيارة واحدة تتحول إلى تكرار، وإيراد متراكم.",
      },
    ],
  },
  services: {
    eyebrow: "ماذا نقدم",
    title: "كل ما يحوّل الاهتمام إلى عملاء — متصل ببعضه.",
    subtitle:
      "معظم الوكالات تبيعك خدمة واحدة وتتركك تربط بين الأجزاء. نحن نصمم وندير نظامًا واحدًا — كل جزء أدناه يرتبط بمرحلة من نموّكم.",
    seeAll: "عرض جميع الخدمات",
    expandMore: "اضغط للمزيد",
    showLess: "عرض أقل",
    learnMore: "اعرف المزيد",

    items: [
      {
        name: "مواقع إلكترونية متميزة",
        line: "موقع سريع وعصري يترك الانطباع الأول الصحيح.",
        detail: "نصمم موقعكم ونبنيه ونطلقه — المحتوى، تصميم الجوال، السرعة، أساسيات السيو، ونماذج استفسار تصل مباشرة إلى بريدكم.",
      },
      {
        name: "ملف جوجل التجاري",
        line: "اظهروا حيث يبحث عنكم العملاء المحليون بالفعل.",
        detail: "نجهّز ملفكم ونحسّنه — الفئات والصور والمنشورات والكلمات المفتاحية — لتظهروا في الخرائط والبحث المحلي.",
      },
      {
        name: "إدارة التقييمات",
        line: "ابنوا الثقة قبل أن تبدأ أي محادثة.",
        detail: "نجهّز طلبات تقييم بسيطة بعد كل زيارة ونساعدكم على الرد باحترافية، ليستمر تقييمكم في الارتفاع.",
      },
      {
        name: "محتوى المستخدمين (UGC)",
        line: "محتوى حقيقي وقريب من الناس يبقي علامتكم في الذهن.",
        detail: "نكتب وننتج فيديوهات وصورًا بأسلوب صنّاع المحتوى تناسب إنستغرام وتيك توك — جاهزة للنشر أو للإعلان.",
      },
      {
        name: "إعلانات الفيديو",
        line: "فيديوهات قصيرة توقف التمرير وتبيع النتيجة.",
        detail: "من الفكرة والسيناريو إلى التصوير والمونتاج، ننتج إعلانات سينمائية وريلز بمقاسات كل منصة.",
      },
      {
        name: "فيديوهات الأفاتار بالذكاء الاصطناعي",
        line: "فيديوهات احترافية لعلامتكم، بسرعة وبتكلفة تناسب نموكم.",
        detail: "نصنع مقدّمين واقعيين بالذكاء الاصطناعي يتحدثون باسم علامتكم بالعربية والإنجليزية — بلا استوديو ولا إعادة تصوير.",
      },
      {
        name: "الإعلانات المدفوعة",
        line: "ميتا وتيك توك وجوجل وإعلانات ChatGPT الجديدة — استراتيجية واحدة لكل المنصات.",
        detail: "نخطط حملاتكم ونطلقها ونديرها على فيسبوك وإنستغرام وتيك توك وجوجل وإعلانات ChatGPT — الاستهداف والتصاميم والميزانيات والتحسين الأسبوعي.",
      },
      {
        name: "أتمتة الذكاء الاصطناعي ونماذج اللغة",
        line: "اجعلوا الذكاء الاصطناعي يعمل داخل أعمالكم.",
        detail: "نبني مساعدين ذكيين وسير عمل بنماذج اللغة مدرّبة على أعمالكم — للرد على الأسئلة وكتابة المحتوى وتنظيم البيانات وإنجاز المهام المتكررة.",
      },
      {
        name: "أتمتة الأعمال",
        line: "واتساب وإنستغرام وموظف استقبال ذكي وإدارة العملاء — كلها تعمل تلقائيًا.",
        detail: "نؤتمت الردود على واتساب وإنستغرام، ونضيف موظف استقبال ذكيًا يحجز ويصنّف العملاء على مدار الساعة، ونربط نظام العملاء والمتابعات حتى لا يضيع شيء.",
      },
      {
        name: "روبوتات محادثة لخدمة العملاء",
        line: "إجابات مفيدة بأسلوب علامتكم، مع تحويل سلس إلى فريقكم.",
        detail: "نبني روبوتات دعم تعتمد على أسئلتكم الشائعة وسياساتكم ومعلومات أعمالكم، ونربط الموقع وواتساب أو إنستغرام بسير عمل عبر n8n. تجيب عن الأسئلة المتكررة، وتجمع تفاصيل الطلب، وتحول الحالات المعقدة إلى الشخص المناسب — مع حدود واضحة لما يتولاه الذكاء الاصطناعي.",
      },
      {
        name: "سير عمل تأهيل العملاء المحتملين",
        line: "حوّلوا الاستفسارات الواردة إلى فرص منظّمة وجاهزة لفريق المبيعات.",
        detail: "نبني سير عمل عبر n8n يجمع الاستفسارات من النماذج والإعلانات والرسائل، ويطرح أسئلة التأهيل المناسبة ويقيّم العملاء وفق معاييركم. تنتقل الفرص المؤهلة إلى نظام إدارة العملاء مع تفاصيلها وخطوات المتابعة والحجز، وتبقى الحالات الاستثنائية لمراجعة فريقكم.",
      },
      {
        name: "أتمتة التواصل الخارجي",
        line: "نجد العملاء المناسبين، ونبدأ التواصل، ونؤتمت المتابعة.",
        detail: "نبني قوائم عملاء مستهدفة، ونكتب رسائل بأسلوب علامتكم، ونؤتمت المتابعة. ننظّم الردود ليركّز فريقكم على العملاء المهتمين — بموافقتكم وضمن حدود إرسال واضحة.",
        link: "/services/ai-outreach",
      },

      {
        name: "معالجة الفواتير والمستندات",
        line: "إدخال يدوي أقل، وموافقات أوضح، ومستندات في مكانها الصحيح.",
        detail: "نربط البريد والملفات المرفوعة وأدوات أعمالكم عبر n8n لاستخراج بيانات الفواتير والمستندات، والتحقق من الحقول المطلوبة وتنبيهكم إلى التكرار أو البيانات غير المؤكدة. نوجّه السجلات للموافقة، ونزامنها مع أدوات المحاسبة أو إدارة العملاء، ونؤرشفها بسجل قابل للتتبع — مع إبقاء القرار بيد فريقكم.",
      },
      {
        name: "التطبيقات",
        line: "تطبيقات جوال وويب مخصصة توسّع نطاق وصولكم.",
        detail: "نصمم ونبني تطبيقات iOS وأندرويد وويب — للحجوزات أو الولاء أو الطلبات أو بوابات الأعضاء — حسب طريقة تعامل عملائكم معكم.",
      },
      {
        name: "تطوير البرمجيات",
        line: "برمجيات مخصصة مبنية حول طريقة عملكم الفعلية.",
        detail: "نبني أدوات داخلية ولوحات تحكم وبوابات ومنصات من الصفر — بدلًا من الجداول والأدوات الجاهزة التي لا تناسبكم.",
      },
      {
        name: "ذكاء الأعمال",
        line: "لوحات بيانات واضحة تُظهر ما يقود النمو فعليًا.",
        detail: "نربط بيانات الإعلانات والموقع والمبيعات وإدارة العملاء في لوحة واحدة، لتعرفوا ما الذي ينجح وأين تستثمرون بعدها.",
      },
    ] as ServiceItem[],
  },
  aiOutreach: {
    eyebrow: "أتمتة التواصل الخارجي",
    title: "استفسارات جديدة، ",
    titleGradient: "دون أن تطارد أحدًا.",
    subtitle:
      "نبحث عن عملائكم المثاليين، ونتواصل معهم نيابة عنكم، ونتابع معهم — فتستمر الاستفسارات بالوصول دون ملاحقة.",
    backToServices: "العودة إلى الخدمات",
    stepsEyebrow: "كيف تعمل",
    stepsTitle: "أربع خطوات، ثم تعمل تلقائيًا.",
    steps: [
      {
        title: "نحدّد العميل المثالي",
        detail: "نرسم خريطة للأعمال والمناصب والمناطق التي تشتري منكم فعليًا، ثم نبني قائمة نظيفة ومدقّقة — بلا قوائم مسلوقة ولا رسائل عشوائية.",
      },
      {
        title: "نكتب الرسائل ونرسلها",
        detail: "رسائل مخصصة بأسلوب علامتكم، تُرسل من نطاقكم عبر البريد أو واتساب أو لينكدإن، وبوتيرة تحفظ سمعة بريدكم.",
      },
      {
        title: "نتولّى المتابعة",
        detail: "نقرأ كل ردّ ونصنّفه: نجيب عن الأسئلة، ونحجز المهتمين، ونرسل تذكيرًا مهذبًا لمن لم يرد. أنتم ترون فقط ما يستحق وقتكم.",
      },
      {
        title: "ويبدأ دوركم",
        detail: "تصلكم الفرص المؤهلة إلى بريدكم أو نظام إدارة العملاء مع تفاصيلها كاملة، فتدخلون في محادثة دافئة بدل اتصال بارد.",
      },
    ],
    includedEyebrow: "ما الذي يشمله",
    includedTitle: "كل شيء، متولّى بالكامل.",
    included: [
      "بناء قوائم العملاء المناسبين وتدقيقها",
      "كتابة الرسائل بأسلوب علامتكم — بالعربية والإنجليزية",
      "الإرسال من نطاقكم وأرقامكم",
      "الرد على الرسائل وتصنيفها وحجز المهتمين",
      "سلاسل متابعة مع قواعد إيقاف واضحة",
      "ملخص أسبوعي: الرسائل المرسلة، الردود، والحجوزات",
    ],
    guardEyebrow: "معلومات مهمة",
    guardTitle: "لا رسائل مزعجة، ولا وعود لا نستطيع الوفاء بها.",
    guards: [
      "القوائم والحسابات ملككم — كل ما نبنيه يبقى لكم.",
      "لا تُرسل أي رسالة قبل أن توافقوا على القائمة والنص.",
      "نرسل بوتيرة بشرية من نطاقات موثّقة، ويؤخذ بالاعتراض فورًا.",
      "النتائج تعتمد على عرضكم وقائمة العملاء والسوق — لا نعدكم برقم محدد.",
    ],
  },
  industries: {

    eyebrow: "لمن نعمل",
    title: "نتحدث لغة قطاعكم — لا «أعمال بشكل عام».",
    subtitle:
      "نعمل مع أصحاب أعمال محلية طموحة تعتمد على الثقة والسمعة وتدفق مستمر من العملاء الجدد.",
    closing: "وأي عمل محلي يستحق عملاء أكثر مما يحصل عليه حاليًا.",
    items: [
      {
        name: "المقاهي والمطاعم",
        line: "املأوا الطاولات الهادئة وحوّلوا الزوار الجدد إلى رواد دائمين.",
      },
      { name: "الصالونات والحلاقة", line: "أبقوا الكراسي ممتلئة والمواعيد محجوزة." },
      { name: "عيادات الأسنان", line: "كونوا العيادة التي يثق بها المرضى قبل أن يتصلوا." },
      { name: "الرعاية الطبية والعافية", line: "حوّلوا عمليات البحث الهادئة إلى مواعيد محجوزة." },
      { name: "الصالات الرياضية والاستوديوهات", line: "استقطبوا أعضاء يبقون فعليًا." },
      { name: "العقارات", line: "كونوا أول من يظهر أمام المشترين والبائعين." },
      { name: "المحاسبة والمالية", line: "اكسبوا عملاء يقدّرون الخبرة أكثر من السعر." },
      { name: "مكاتب المحاماة", line: "كونوا المكتب الذي يختاره العملاء بثقة." },
    ],
  },
  how: {
    eyebrow: "كيف نعمل",
    title: "بسيط في البداية. مبني ليدوم.",
    subtitle: "مسار واضح من ثلاث خطوات، من حيث أنتم الآن إلى نظام يجلب لكم العملاء.",
    steps: [
      {
        title: "احصلوا على خطة نموكم المجانية",
        line: "نراجع مدى سهولة إيجاد العملاء لكم، ومستوى الثقة التي تمنحونها للوهلة الأولى، وأين تضيع الاستفسارات.",
      },
      {
        title: "نبني نظامكم",
        line: "الموقع الإلكتروني، الملفات، المحتوى والتقاط العملاء — مصممة ومترابطة كنظام واحد، لا أجزاء منفصلة.",
      },
      {
        title: "أنتم تنمون",
        line: "نحن ندير النظام ونطوّره باستمرار، لتتفرغوا أنتم لعملكم.",
      },
    ],
  },
  why: {
    eyebrow: "من نحن",
    title: "استوديو، لا وكالة.",
    subtitle: "صغير بشكل متعمد، ليعمل العملاء مباشرة مع من ينجز العمل فعليًا.",
    p1: "Odd Concepts Digital استوديو نمو رقمي متميز في دبي. نحافظ على حجمنا الصغير بشكل مقصود: تتحدثون مع الاستراتيجي والمنفذ مباشرة، لا مع مدير حسابات على بعد ثلاث طبقات.",
    p2: "الذكاء الاصطناعي أداة تساعدنا نشتغل أسرع ونكتب بشكل أدق ونبني أنظمة فعالة — لكن كل قرار يتخذه إنسان يهتم فعلاً بعملكم.",
    cardHeading: "ما يهمنا هنا",
    imageAlt: "متحف المستقبل مضاءً ليلاً في دبي",
    items: [
      {
        title: "مقرنا في دبي",
        line: "استوديو نمو رقمي صغير ومتخصص، يعمل مع أعمال محلية طموحة في جميع أنحاء الإمارات.",
      },
      {
        title: "ما نبيعه",
        line: "النمو والثقة والظهور والعملاء — لا مجرد مواقع أو ذكاء اصطناعي أو إعلانات منفصلة.",
      },
      {
        title: "وعدنا",
        line: "لا عملاء وهميون، ولا شعارات مستعارة، ولا أرقام غير حقيقية. كل شيء هنا صادق.",
      },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات واضحة ومباشرة.",
    items: [
      {
        q: "كم تكلفة الخدمة؟",
        a: "السعر يُحدَّد وفق ما تحتاجونه فعلاً. لا نبيع باقات موحدة للجميع. خطة النمو مجانية، وبعدها نوصي بالعمل المناسب لأهدافكم وميزانيتكم.",
      },
      {
        q: "كم من وقتي سيستغرق هذا؟",
        a: "وقت قليل جدًا. نحن نتولى الجهد الأكبر — المراجعات والتصميم والبناء والمحتوى والإعداد. كل ما عليكم هو الإجابة عن بعض الأسئلة، منحنا الصلاحيات، والموافقة على العمل.",
      },
      {
        q: "ما نوع النتائج التي يمكنني توقعها؟",
        a: "لا يمكن لأحد أن يعِد بأرقام محددة بصدق. ما نقوم به هو معالجة الأسباب الفعلية التي تمنع العملاء من إيجادكم أو الثقة بكم أو اختياركم — ثم الاستمرار في التحسين.",
      },
      {
        q: "مع أي قطاعات تعملون؟",
        a: "الأعمال المحلية التي تعتمد على السمعة والانطباع الأول: الضيافة، المقاهي، المطاعم، الصالونات، الحلاقة، الصالات الرياضية، عيادات الأسنان والطب، العقارات، المحاسبة، القانون والخدمات المهنية.",
      },
      {
        q: "ما هي خطة النمو المجانية؟",
        a: "مراجعة مجانية لظهوركم وسمعتكم ومعدل التحويل لديكم. تحصلون على الثغرات التي وجدناها، والحلول التي نوصي بها، وما يتطلبه تطبيقها — بلا تكلفة وبلا التزام.",
      },
      {
        q: "ما الذي يميزكم؟",
        a: "نبني وندير نظامًا واحدًا متكاملاً، لا قائمة خدمات منفصلة. ونستخدم الذكاء الاصطناعي كمسرّع خلف الكواليس — لا كميزة لامعة نبيعها لكم.",
      },
    ],
  },
  finalCta: {
    heading: "جاهزون للتوقف عن التخمين والبدء في ",
    headingGradient: "النمو؟",
    subtitle: "احصلوا على خطة نموكم المجانية. بلا تكلفة، بلا التزام، بلا ضغط.",
  },
  servicesPage: {
    eyebrow: "خدماتنا",
    title: "ليست قائمة. بل ",
    titleGradient: "نظام واحد متكامل",
    subtitle:
      "كل خدمة أدناه ترتبط بمرحلة من نموّكم — الظهور، الثقة، التفضيل، الالتقاط، الاستجابة والنمو. يمكنكم البدء بالجزء الأكثر إلحاحًا؛ ونحن نصمم الباقي ليتناسب معه.",
  },
  workPage: {
    eyebrow: "أعمالنا",
    title: "الإثبات في ",
    titleGradient: "العمل",
    titleAfter: ".",
    subtitle:
      "مواقع عملاء حقيقية، حسابات إنستغرام نديرها، وأعمال إنتاج فعلية — إلى جانب الأنظمة الذكية التي نبنيها للشركات.",
  },
  automationWork: {
    eyebrow: "نماذج اللغة الكبيرة وأتمتة الأعمال",
    title: "ذكاء يتجاوز الموقع الإلكتروني.",
    subtitle: "نبني أنظمة تعتمد على نماذج اللغة الكبيرة (LLM)، وتربط معرفة شركتكم بمحادثات العملاء والعمليات اليومية.",
    items: [
      { title: "أنظمة مخصصة بنماذج اللغة الكبيرة", detail: "نربط مستنداتكم ومعرفة شركتكم بمساعدين ذكيين يجيبون عن الأسئلة ويصيغون الردود وينظمون المعلومات، مع مراجعة بشرية عند الحاجة." },
      { title: "أتمتة واتساب", detail: "نحوّل الاستفسارات إلى محادثات منظمة: إجابات عن الأسئلة الشائعة، تأهيل العملاء المحتملين، جمع تفاصيل الحجز، وتحويل المحادثة إلى فريقكم عند الحاجة." },
      { title: "عمليات أعمال مترابطة", detail: "نربط واتساب وإنستغرام والنماذج بنظام إدارة العملاء لتوجيه الاستفسارات وإرسال المتابعات وتقليل المهام الإدارية المتكررة." },
    ],
  },
  clientSites: {
    eyebrow: "أعمال عملاء حقيقية",
    title: "مواقع أطلقناها بالفعل.",
    subtitle: "مواقع عملاء حقيقية، تعمل الآن.",
    detail:
      "هذه ليست مواقع عادية. كل موقع نبنيه يعمل بواجهة مخصصة، وربط خلفي كامل، ومساعد ذكي مدمج في الموقع يتحدث مع زوّارك ويجمع العملاء المحتملين — فيجلب الموقع نفسه الأعمال.",
    visitAria: "زيارة موقع {name} (يفتح في نافذة جديدة)",
  },
  instagram: {
    eyebrow: "إنستغرام",
    title: "حسابات نديرها.",
    subtitle: "حسابات إنستغرام حقيقية نبنيها ونديرها ونعمل على تنميتها لعملائنا.",
    followAria: "فتح حساب {name} على إنستغرام (يفتح في نافذة جديدة)",
    comingSoon: "قريبًا",
  },
  appsWork: {
    eyebrow: "تطبيقات",
    title: "arOund",
    subtitle: "اكتشف · اسحب · الخريطة",
    imageAlt: "ثلاث شاشات لتطبيق arOund جنبًا إلى جنب: اكتشاف الفعاليات والسحب والخريطة",
  },
  media: {
    eyebrow: "إنتاج الاستوديو",
    title: "سينمائي وريلز.",
    subtitle: "أعمال إنتاج حقيقية — منظمة حسب الشكل.",
    tabCinematic: "سينمائي",
    tabReels: "ريلز",
    filterAll: "الكل",
    categories: {
      ads: "إعلانات", storytelling: "سرد قصصي", promos: "ترويج الشركات", venuePromos: "ترويج الأماكن", avatar: "أفاتار",
      videoEdits: "مونتاج فيديو", eventArtwork: "تصاميم فعاليات", viral: "فيرال", shoots: "تصوير", musicVideo: "فيديو موسيقي",
      musicPromo: "بروموهات موسيقية",
    },
    showMore: "عرض المزيد",
    showLess: "عرض أقل",
    titles: {
      "m-verajordan": "Vera Tulum — Jordan John",
      "m-veraandor": "Vera Tulum — Andor Gabriel",
      "m-clientad": "إعلان عميل",
      "m-clientad2": "إعلان عميل ثاني",
      "m-cinead1": "إعلان سينمائي الأول",
          "m-cinead2": "إعلان سينمائي الثاني",
          "m-spotad": "إعلان سينمائي ثالث",
      "m-musicvideo": "فيديو موسيقي",
      "m-room44": "إعلان ترويجي للمكان",
      "m-amer": "تميمة الشركة والقصة",
      "m-viral": "أفكار فيديوهات فيرال",
      "m-winter": "فيديو فيرال",
      "m-4429": "واقعية سينمائية — سرد قصصي",
      "m-4745": "إعلان الشركة الأول",
      "m-5217": "إعلان الشركة الثاني",
      "m-4744": "إعلان الشركة الثالث",
      "m-4693": "إعلان الشركة الرابع",
      "m-5015": "جلسة تصوير المكان",
      "m-room44reel": "إعلان ترويجي للمكان",
      "m-4519": "سرد قصصي",
      "m-3761": "إعلان مستقبلي",
      "m-3694": "جلسة تصوير أزياء",
      "m-4062": "سرد سينمائي أول",
      "m-4370": "سرد سينمائي ثاني",
      "m-cinestory3": "سرد سينمائي ثالث",
      "m-cinestory4": "سرد سينمائي رابع",
      "m-cinestory5": "سرد سينمائي خامس",
      "m-4378": "انتشار إنستغرام — لقطة سينمائية",
      "m-evart1": "تصميم الفعاليات الأول",
      "m-evart2": "تصميم الفعاليات الثاني",
      "m-evart3": "تصميم الفعاليات الثالث",
      "m-evart4": "تصميم الفعاليات الرابع",
      "m-evart5": "تصميم الفعاليات الخامس",
      "m-viralreel1": "ريلز فيروسي الأول",
      "m-viralreel2": "ريلز فيروسي الثاني",
      "m-viralreel3": "ريلز فيروسي الثالث",
      "m-avatar1": "أفاتار الأول",
      "m-videoedits": "مونتاج فيديو",
      "m-avatar2": "أفاتار الثاني",
      "m-avatar3": "أفاتار الثالث",
      "m-musicpromo1": "برومو موسيقي أول",
      "m-musicpromo2": "برومو موسيقي ثاني",
    },
  },
  aboutPage: {
    eyebrow: "من نحن",
    title: "استوديو صغير برؤية ",
    titleGradient: "واضحة",
    titleAfter: ".",
    subtitle:
      "Odd Concepts Digital استوديو نمو مقره دبي لخدمة الأعمال المحلية الطموحة. نصمم وندير نظامًا واحدًا متكاملاً — المواقع، الظهور، المحتوى والاستجابة — بحيث يتحول الاهتمام إلى استفسارات، والاستفسارات إلى عملاء.",
    p1: "كل ما في هذا الموقع هو عملنا: مواقع عملاء حقيقية، حسابات إنستغرام نديرها، وأعمال إنتاج فعلية. نبني وندير النظام كاملًا لعملائنا — وهذا هو الإثبات الذي نقف خلفه.",
    p2: "نعمل بشكل أفضل مع أصحاب الأعمال الذين يهتمون بالتفاصيل، ويريدون شريكًا لا مجرد مورّد، ويفضّلون النمو التدريجي على أساس متين بدلًا من ملاحقة حل سريع. إذا كان هذا يصفكم، فإن خطة النمو المجانية هي أسهل طريقة للبدء.",
    imageAlt: "منظر جوي ليلي لنخلة جميرا مضاءة بالأزرق والبنفسجي",
  },
  growthPlanPage: {
    eyebrow: "خطة النمو المجانية",
    title: "خطة واضحة لكيفية ",
    titleGradient: "تنمية عملكم",
    titleAfter: ".",
    subtitle:
      "أخبرونا قليلاً عن عملكم. سنراجعه بعناية ونعود إليكم بخطة نمو مصممة خصيصًا لكم — بلا تكلفة، بلا التزام، بلا ضغط.",
  },
  form: {
    businessTypes: {
      "Café / Restaurant": "مقهى / مطعم",
      "Salon / Barber": "صالون / حلاقة",
      Dental: "طب أسنان",
      "Medical / Wellness": "طبي / عافية",
      "Gym / Studio": "صالة رياضية / استوديو",
      "Real Estate": "عقارات",
      "Accounting / Finance": "محاسبة / مالية",
      Law: "قانون",
      Other: "أخرى",
    },
    yourName: "اسمك",
    businessName: "اسم النشاط التجاري",
    email: "البريد الإلكتروني",
    phone: "الهاتف / واتساب",
    businessType: "نوع النشاط",
    website: "الموقع الإلكتروني الحالي",
    optional: "اختياري",
    about: "أخبرونا عن نشاطكم التجاري",
    aboutHint: "اختياري — أي شيء يساعدنا على فهمكم",
    needs: "بماذا تحتاجون المساعدة؟",
    selectPlaceholder: "اختر...",
    submitIdle: "احصل على خطة نموي المجانية",
    submitSending: "جارٍ الإرسال...",
    formNote: "بلا رسائل مزعجة · بلا ضغط · مجرد خطوة تالية واضحة",
    doneTitle: "تم استلام طلبكم.",
    doneBody: "سنراجع نشاطكم بعناية ونعود إليكم قريبًا بخطة نمو واضحة وصادقة.",
    failedTitle: "خطوة أخيرة.",
    failedBody:
      "ما قدرنا نرسل بياناتكم تلقائيًا الآن. تواصلوا معنا عبر واتساب أو البريد — إجاباتكم جاهزة للإرسال بضغطة واحدة.",
    talkWhatsapp: "تحدث عبر واتساب",
    emailDirect: "أو راسلنا مباشرة عبر البريد",

    validation: {
      nameRequired: "يرجى إخبارنا باسمك",
      businessNameRequired: "اسم النشاط التجاري مطلوب",
      emailInvalid: "أدخل بريدًا إلكترونيًا صالحًا",
      phoneInvalid: "أدخل رقم هاتف أو واتساب صالحًا",
      businessTypeInvalid: "اختر الأقرب لنشاطك",
      urlInvalid: "أدخل رابطًا صالحًا",
      needsTooShort: "جملة أو جملتان كافية",
    },
  },
  privacy: {
    eyebrow: "الخصوصية",
    title: "كيف نتعامل مع معلوماتكم.",
    subtitle: "ملخص واضح لما نجمعه، ولماذا، وما لا نقوم به.",
    collectH: "ما الذي نجمعه.",
    collectB:
      "عند إرسال نموذج خطة النمو، نستلم التفاصيل التي تُدخلونها — اسمكم، اسم النشاط، البريد الإلكتروني، الهاتف/واتساب، نوع النشاط، الموقع الإلكتروني (اختياري) وما تحتاجون المساعدة به. هذا كل شيء.",
    whyH: "لماذا.",
    whyB: "فقط لنتمكن من قراءة استفساركم والرد عليكم. نحن لا نبيع أو نؤجر أو نشارك بياناتكم مع أطراف ثالثة.",
    storedH: "كيف يتم تخزينها.",
    storedB:
      "تُرسَل الاستفسارات إلينا عبر البريد الإلكتروني. نحتفظ بها فقط للمدة اللازمة لمساعدتكم — يمكنكم طلب حذف بياناتكم في أي وقت.",
    cookiesH: "ملفات الارتباط وقياس الإعلانات.",
    cookiesB:
      "وبإذنكم حيث يشترطه القانون، يستخدم هذا الموقع Meta Pixel (بيكسل فيسبوك) لقياس كيفية استخدام الزوار للموقع — مثل الصفحات التي تُشاهَد — ولقياس إعلاناتنا على فيسبوك وإنستغرام وتحسينها. وقد يضع ملفات ارتباط ويستلم بيانات مثل الصفحات المُتاحة والأفعال المتخذة هنا. الزوار في المناطق التي تشترط الموافقة لا يُقاسون إلا بعد القبول عبر شريط ملفات الارتباط؛ ويمكنكم تغيير اختياركم في أي وقت عبر «إعدادات ملفات الارتباط» في أسفل الموقع أو بمراسلتنا.",
    choicesH: "خياراتكم.",
    choicesB: "لطلب الوصول إلى بياناتكم أو تصحيحها أو حذفها، راسلونا عبر البريد الإلكتروني",
    disclaimer:
      "هذا ملخص بلغة مبسطة، وليس عقدًا قانونيًا. إذا كان لدى نشاطكم متطلبات قانونية خاصة، تواصلوا معنا وسنكون سعداء بالمساعدة.",
  },
  terms: {
    eyebrow: "الشروط",
    title: "شروط الاستخدام.",
    subtitle: "النسخة المختصرة — بلا مفاجآت.",
    siteH: "هذا الموقع.",
    siteB:
      "موقع Odd Concepts Digital مُقدَّم لأغراض المعلومات والاستفسار فقط. المحتوى والنصوص والعناصر البصرية والهيكل ملك لنا — يُرجى عدم نسخها أو إعادة استخدامها دون إذن.",
    workShownH: "الأعمال المعروضة.",
    workShownB:
      "الأعمال المعروضة في هذا الموقع هي إنتاجنا الخاص، إلى جانب مواقع عملاء حقيقية وحسابات إنستغرام نبنيها ونديرها.",
    growthPlanH: "خطة النمو.",
    growthPlanB:
      "تُقدَّم خطة النمو مجانًا وبلا أي التزام. وهي تعكس رأينا الصادق وقت كتابتها، وليست ضمانًا للنتائج.",
    liabilityH: "المسؤولية.",
    liabilityB:
      "نتوخى الحرص المعقول في المعلومات الواردة في هذا الموقع، لكننا لا نتحمل المسؤولية عن قرارات تُتخذ بناءً على صفحات الموقع وحدها فقط. أي أمر ملزم سيتم توضيحه دائمًا كتابيًا عند التعاقد.",
    contactH: "التواصل.",
    contactB: "أسئلة؟ راسلونا عبر",
  },
  oddy: {
    name: "أودي",
    role: "دليلك في أود كونسبتس",
    open: "اسأل أودي",
    close: "إغلاق أودي",
    greeting: "مرحباً، أنا أودي. اسألني أي شيء عن خدماتنا وأعمالنا وطريقة البدء — بالعربية أو الإنجليزية.",
    placeholder: "اسأل عن المواقع، الإعلانات، الأتمتة…",
    thinking: "أودي يفكر…",
    reset: "مسح المحادثة",
    minimize: "تصغير",
    clearConfirm: "هل تريد فعلاً مسح المحادثة؟",
    clearYes: "نعم، امسح",
    clearNo: "إلغاء",
    error: "تعذّر على أودي الرد الآن. حاول مرة أخرى أو راسلنا على واتساب.",
    suggestions: ["ما الخدمات التي تقدمونها؟", "حدثني عن أتمتة الذكاء الاصطناعي", "كيف أبدأ؟"],
  },
  footer: {
    call: "اتصل",
    whatsappButton: "تواصل عبر واتساب",
    instagramButton: "تابعنا على إنستغرام",
    contact: "التواصل",
    explore: "استكشف",
    readyToGrow: "جاهزون للنمو؟",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
  consent: {
    title: "ملفات الارتباط والخصوصية.",
    body: "وبإذنكم، نستخدم ملف ارتباط صغير (Meta Pixel) لقياس كيفية استخدام الزوار لهذا الموقع ولتحسين إعلاناتنا على فيسبوك وإنستغرام. يمكنكم القبول أو الرفض — والموقع يعمل بنفس الطريقة.",
    accept: "قبول",
    reject: "رفض",
    privacyLink: "سياسة الخصوصية",
    settings: "إعدادات ملفات الارتباط",
  },
};

export const dictionaries = { en, ar };
export type Lang = keyof typeof dictionaries;
