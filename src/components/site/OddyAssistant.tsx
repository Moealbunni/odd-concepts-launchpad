import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useRouterState } from "@tanstack/react-router";
import { Minus, Trash2, X } from "lucide-react";
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
import oddyAvatar from "@/assets/oddy-avatar.png";
import { useLanguage } from "@/i18n/LanguageContext";

const STORAGE_KEY = "ocd-oddy";

export function OddyAssistant() {
  const { t, lang, setLang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [langChosen, setLangChosen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
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

  // Desktop only: auto-focus. On phones this would pop the keyboard instantly.
  useEffect(() => {
    if (open && status === "ready" && window.matchMedia("(min-width: 640px)").matches) {
      textareaRef.current?.focus();
    }
  }, [open, status]);

  // Phones: full-screen sheet sized to the visible area (shrinks above the
  // keyboard) and the page behind it is locked so it can't scroll.
  const [mobileBox, setMobileBox] = useState<{ top: number; height: number } | null>(null);
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = { o: html.style.overflow, p: body.style.position, t: body.style.top, w: body.style.width };
    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    const vv = window.visualViewport;
    const update = () => setMobileBox({ top: vv?.offsetTop ?? 0, height: vv?.height ?? window.innerHeight });
    update();
    vv?.addEventListener("resize", update);
    vv?.addEventListener("scroll", update);
    return () => {
      vv?.removeEventListener("resize", update);
      vv?.removeEventListener("scroll", update);
      html.style.overflow = prev.o;
      body.style.position = prev.p;
      body.style.top = prev.t;
      body.style.width = prev.w;
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
      setMobileBox(null);
    };
  }, [open]);

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
          className="gradient-bg brand-button-primary fixed z-40 flex items-center gap-3 rounded-full py-1.5 pe-5 ps-1.5 text-primary-foreground ring-2 ring-highlight-border ring-offset-2 ring-offset-background transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
          style={{ insetInlineEnd: "max(1rem, env(safe-area-inset-right))", bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <img src={oddyAvatar} alt="" width={48} height={48} className="size-12 drop-shadow-lg" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold">{t.oddy.open}</span>
            <span className="text-xs font-normal opacity-80">{t.oddy.role}</span>
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.oddy.name}
          dir={lang === "ar" ? "rtl" : "ltr"}
          style={mobileBox ? { top: mobileBox.top, height: mobileBox.height } : undefined}
          className="fixed inset-x-0 top-0 z-[60] flex h-[100dvh] flex-col overflow-hidden overscroll-contain bg-card sm:inset-x-auto sm:top-auto sm:end-6 sm:bottom-6 sm:h-[min(640px,calc(100dvh-3rem))] sm:w-[400px] sm:rounded-2xl sm:border sm:border-highlight-border sm:shadow-2xl"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-3" style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}>
            <img src={oddyAvatar} alt="" width={40} height={40} className="size-10" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">{t.oddy.name}</p>
              <p className="truncate text-xs text-muted-foreground">{t.oddy.role}</p>
            </div>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                aria-label={t.oddy.reset}
                title={t.oddy.reset}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Trash2 className="size-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.oddy.minimize}
              title={t.oddy.minimize}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Minus className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.oddy.close}
              title={t.oddy.close}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </header>
          {confirmClear && (
            <div role="alertdialog" className="flex flex-wrap items-center gap-2 border-b border-border bg-highlight-soft px-4 py-3 text-sm">
              <p className="min-w-0 flex-1 text-foreground">{t.oddy.clearConfirm}</p>
              <button type="button" onClick={() => setConfirmClear(false)} className="rounded-full px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">{t.oddy.clearNo}</button>
              <button type="button" onClick={() => { stop(); setMessages([]); setError(null); setLangChosen(false); setConfirmClear(false); }} className="rounded-full bg-destructive px-3 py-1.5 font-medium text-destructive-foreground">{t.oddy.clearYes}</button>
            </div>
          )}

          <Conversation className="min-h-0 flex-1 overscroll-contain">
            <ConversationContent className="gap-5 p-4">
              <Message from="assistant">
                <MessageContent>
                  <MessageResponse>{t.oddy.greeting}</MessageResponse>
                </MessageContent>
              </Message>
              {messages.length === 0 && !langChosen && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Choose your language · اختر لغتك</p>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      ["en", "English"],
                      ["ar", "العربية"],
                    ] as const).map(([code, label]) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => { setLang(code); setLangChosen(true); }}
                        className="rounded-xl border border-highlight-border bg-highlight-soft px-3 py-2.5 text-sm font-medium text-foreground hover:border-highlight"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 0 && langChosen && (
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
                      p.type === "text" ? <div key={i} dir="auto"><MessageResponse>{p.text}</MessageResponse></div> : null,
                    )}
                  </MessageContent>
                </Message>
              ))}
              {status === "submitted" && <Shimmer className="text-sm">{t.oddy.thinking}</Shimmer>}
              {error && <p className="text-sm text-destructive">{error}</p>}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="shrink-0 border-t border-border p-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
            <PromptInput onSubmit={(msg) => send(msg.text)}>
              <PromptInputBody>
                <PromptInputTextarea ref={textareaRef} placeholder={t.oddy.placeholder} className="min-h-11 max-h-28 text-base sm:text-sm" />
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
