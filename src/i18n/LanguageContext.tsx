import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, en, type Lang, type Translations } from "./translations";

const STORAGE_KEY = "ocd-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  /** true when the active language is right-to-left. */
  rtl: boolean;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
  rtl: false,
});

function applyDocumentLang(lang: Lang) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  html.classList.toggle("font-arabic", lang === "ar");
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start "en" so SSR markup and first client render agree.
  const [lang, setLangState] = useState<Lang>("en");

  // Restore persisted choice after hydration.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    const next: Lang = stored === "ar" ? "ar" : "en";
    setLangState(next);
    applyDocumentLang(next);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyDocumentLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
      rtl: lang === "ar",
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Convenience: just the resolved dictionary. */
export function useT() {
  return useContext(LanguageContext).t;
}
