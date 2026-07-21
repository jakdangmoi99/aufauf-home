"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JuicySection from "@/components/JuicySection";
import SaltSection from "@/components/SaltSection";
import CompanySection from "@/components/CompanySection";
import GlobalSection from "@/components/GlobalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export type Lang = "ko" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ko");
  const ko = lang === "ko";

  return (
    <div className="min-h-screen" style={{ background: "#f7f6f3" }}>
      <Header lang={lang} setLang={setLang} ko={ko} activePage="home" />

      <Hero ko={ko} />

      <section
        id="product"
        className="scroll-mt-16 px-[clamp(18px,4vw,48px)] py-[30px]"
      >
        <JuicySection ko={ko} />
        <SaltSection ko={ko} />
      </section>

      <CompanySection ko={ko} />
      <GlobalSection ko={ko} />
      <ContactSection ko={ko} />
      <Footer />
    </div>
  );
}
