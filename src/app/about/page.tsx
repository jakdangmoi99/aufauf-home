"use client";

import { useLang } from "@/hooks/useLang";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import BrandVision from "@/components/about/BrandVision";
import FounderMessage from "@/components/about/FounderMessage";
import OurJourney from "@/components/about/OurJourney";
import GlobalReach from "@/components/about/GlobalReach";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { lang, setLang, ko } = useLang();

  return (
    <div className="min-h-screen" style={{ background: "#f7f6f3" }}>
      <Header lang={lang} setLang={setLang} ko={ko} activePage="about" />
      <AboutHero ko={ko} />
      <BrandVision ko={ko} />
      <FounderMessage ko={ko} />
      <GlobalReach ko={ko} />
      <OurJourney ko={ko} />
      <ContactSection ko={ko} />
      <Footer />
    </div>
  );
}
