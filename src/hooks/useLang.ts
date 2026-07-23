"use client";

import { useState, useEffect, useCallback } from "react";

type Lang = "ko" | "en";

export function useLang() {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("aufauf-lang") as Lang | null;
    if (saved === "ko" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("aufauf-lang", l);
  }, []);

  return { lang, setLang, ko: lang === "ko" };
}
