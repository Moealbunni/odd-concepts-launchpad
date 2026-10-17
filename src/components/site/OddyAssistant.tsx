import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useRouterState } from "@tanstack/react-router";
import { RotateCcw, X } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { BrandMark } from "./BrandMark";
import { useLanguage } from "@/i18n/LanguageContext";

const STORAGE_KEY = "ocd-oddy";

export function OddyAssistant() {
  const { t, lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loaded = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    id: "oddy",
    transport: new DefaultChatTransport({ api: "/api/oddy" }),
    onError: (e) => setError(e.message?.startsWith("{") ? t.oddy.error : e.message || t.oddy.error),
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setMessages(JSON.parse(raw) as UIMessage[]);
    } catch {
      /* ignore */
    }
    loaded.current = true;
  }, [setMessages]);

  useEffect(() => {
    if (!loaded.current || status === "streaming" || status === "submitted") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages, status]);

  useEffect(() => {
    if (open && status === "ready") textareaRef.current?.focus();
  }, [open, status]);

  if (pathname === "/free-growth-plan" && !open) return null;

  const busy = status === "submitted" || status === "streaming";
  const send = (text: string) => {
    if (!text.trim() || busy) return;
    setError(null);
    sendMessage({ text });
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.oddy.open}
          className="gradient-bg brand-button-primary fixed z-40 flex items-center gap-2 rounded-full py-2 pe-5 ps-2 text-sm font-semibold text-primary-foreground ring-1 ring-highlight-border transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          style={{ insetInlineEnd: "max(1rem, env(safe-area-inset-right))", bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-background/80">
            <BrandMark className="h-6 w-auto" />
          </span>
          {t.oddy.open}
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.oddy.name}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="fixed inset-x-2 bottom-2 z-50 flex h-[min(640px,calc(100dvh-1rem))] flex-col overflow-hidden rounded-2xl border border-highlight-border bg-card shadow-2xl sm:inset-x-auto sm:end-6 sm:bottom-6 sm:w-[400px]"
        >
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <span className="gradient-bg flex size-10 items-center justify-center rounded-full p-0.5">
              <span className="flex size-full items-center justify-center rounded-full bg-background">
                <BrandMark className="h-6 w-auto" />
              </span>
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">{t.oddy.name}</p>
              <p className="truncate text-xs text-muted-foreground">{t.oddy.role}</p>
            </div>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => { stop(); setMessages([]); setError(null); }}
                aria-label={t.oddy.reset}
                title={t.oddy.reset}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <RotateCcw className="size-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.oddy.close}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </header>

          <Conversation className="flex-1">
            <ConversationContent className="gap-5 p-4">
              <Message from="assistant">
                <MessageContent>
                  <MessageResponse>{t.oddy.greeting}</MessageResponse>
                </MessageContent>
              </Message>
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2">
                  {t.oddy.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-highlight-border bg-highlight-soft px-3 py-1.5 text-xs text-foreground hover:border-highlight"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((m) => (
                <Message key={m.id} from={m.role}>
                  <MessageContent>
                    {m.parts.map((p, i) =>
                      p.type === "text" ? <MessageResponse key={i}>{p.text}</MessageResponse> : null,
                    )}
                  </MessageContent>
                </Message>
              ))}
              {status === "submitted" && <Shimmer className="text-sm">{t.oddy.thinking}</Shimmer>}
              {error && <p className="text-sm text-destructive">{error}</p>}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border p-3">
            <PromptInput onSubmit={(msg) => send(msg.text)}>
              <PromptInputBody>
                <PromptInputTextarea ref={textareaRef} placeholder={t.oddy.placeholder} />
              </PromptInputBody>
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} onStop={stop} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}
    </>
  );
}
