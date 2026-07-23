"use client";

import { useLang } from "@/hooks/useLang";
import Header from "@/components/Header";
import TurntableHero from "@/components/products/TurntableHero";
import SaltLineSection from "@/components/products/SaltLineSection";
import JuicyLineSection from "@/components/products/JuicyLineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const { lang, setLang, ko } = useLang();

  return (
    <div className="min-h-screen" style={{ background: "#f7f6f3" }}>
      <Header lang={lang} setLang={setLang} ko={ko} activePage="products" />
      <TurntableHero ko={ko} />
      <SaltLineSection ko={ko} />
      <JuicyLineSection ko={ko} />
      <ContactSection ko={ko} />
      <Footer />
    </div>
  );
}
