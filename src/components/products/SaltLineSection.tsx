"use client";

import { saltProducts } from "@/data/products";

export default function SaltLineSection({ ko }: { ko: boolean }) {
  return (
    <section id="salt" className="scroll-mt-16">
      {/* ── A. LINE HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "clamp(480px, 60vw, 640px)" }}>
        {/* Full-width video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/salt-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,.35) 0%, rgba(0,0,0,.1) 50%, transparent 100%)" }} />

        {/* Floating text content */}
        <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-between p-8 md:p-14 md:py-16" style={{ minHeight: "clamp(480px, 60vw, 640px)" }}>
          <span className="inline-flex items-center gap-2.5 self-start px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-[16px] font-medium text-white">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-60" />
              <span className="relative rounded-full w-2.5 h-2.5 bg-white" />
            </span>
            Now Playing · Himalayan Pink Salt Therapy
          </span>

          <div className="mt-auto pt-12">
            <div className="flex items-end gap-6">
              <button className="flex-shrink-0 w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-sm shadow-[0_8px_28px_rgba(0,0,0,.15)] flex items-center justify-center hover:bg-white/30 hover:scale-105 transition-all" aria-label="Play">
                <svg width="24" height="26" viewBox="0 0 20 22" fill="none"><path d="M2 1L18 11L2 21V1Z" fill="white" /></svg>
              </button>
              <div>
                <p className="font-[var(--font-fredoka)] text-[16px] font-semibold uppercase tracking-[.14em] text-white/80 mb-2">4-IN-1 BATH POWERHOUSE</p>
                <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(28px,5vw,42px)] leading-[1.12] text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,.15)" }}>
                  {ko ? <>100% 히말라야 핑크 솔트로,<br/>당신의 샤워가 바뀌는 순간</> : <>With 100% Himalayan pink salt,<br/>the moment your shower changes</>}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── B. LEAD ── */}
      <div className="bg-white border-b border-[#241E1A]/8">
        <div className="max-w-[900px] mx-auto px-6 py-14 md:py-16 text-center">
          <p className="font-[var(--font-cormorant)] italic text-[clamp(22px,3.2vw,30px)] leading-[1.6] text-[#155874]">
            {ko ? (<>씻고, 각질 케어하고, 진정하고, 버블배스까지 —<br/>매일의 샤워가 스파가 되는 시간</>) : (<>Cleanse, exfoliate, soothe, and soak —<br/>every shower becomes a spa</>)}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {(ko ? ["4-in-1", "자연유래 86.8%", "100% 히말라야 핑크 솔트", "살구씨", "500·1000ml"] : ["4-in-1", "86.8% naturally derived", "100% Himalayan pink salt", "Apricot seeds", "500·1000ml"]).map((s) => (
              <span key={s} className="px-6 py-2.5 rounded-full text-[16px] font-medium bg-[#E7F1F4] text-[#155874]">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product title ── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-2 text-center">
        <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(32px,5.5vw,48px)] text-[#155874] tracking-tight">
          {ko ? "어푸어푸 바디 스크럽워시" : "auf auf Body Scrub Wash"}
        </h2>
      </div>

      {/* ── C. SECTION HEADING ── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-2 pb-6 text-center">
        <h3 className="font-[var(--font-fredoka)] font-bold text-[clamp(24px,4vw,32px)] text-[#155874]">
          {ko ? "4가지 향, 4가지 기분" : "Four scents, four moods"}
        </h3>
        <p className="mt-3 text-[18px] text-[#241E1A]/50">
          {ko ? "오늘의 컨디션에 맞춰 고르세요" : "Pick the one that fits today"}
        </p>
      </div>

      {/* ── D. ZIGZAG PRODUCTS ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8">
        {saltProducts.map((p, i) => (
          <div
            key={p.num}
            className="rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(36,30,26,.18)]"
            style={{
              marginTop: i > 0 ? "clamp(32px, 5vw, 48px)" : 0,
              background: `linear-gradient(135deg, ${p.color}45, ${p.color}20)`,
              boxShadow: "0 6px 24px rgba(36,30,26,.12)",
              border: `1px solid ${p.color}30`,
            }}
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              {/* Image */}
              <div className="md:[direction:ltr] relative">
                <div className="relative aspect-square w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.hover} alt={ko ? p.ko : p.en} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>

              {/* Copy */}
              <div className="md:[direction:ltr] p-8 md:p-12 relative">

                <span className="font-[var(--font-cormorant)] italic text-[20px] relative" style={{ color: p.deep }}>{p.num}</span>
                <h4 className="mt-2 font-[var(--font-fredoka)] font-bold text-[clamp(26px,3.5vw,34px)] text-[#241E1A] relative">{ko ? p.ko : p.en}</h4>
                <p className="mt-1 text-[17px] font-medium" style={{ color: p.deep }}>{p.concept}</p>

                <p className="mt-6 font-[var(--font-cormorant)] italic text-[clamp(20px,3vw,24px)] leading-[1.5] text-[#241E1A]/80">
                  &ldquo;{ko ? p.hook_ko : p.hook_en}&rdquo;
                </p>

                <div className="mt-7 space-y-3.5 text-[17px]">
                  <div className="flex gap-4">
                    <span className="w-[90px] shrink-0 text-[#241E1A]/35 font-medium">{ko ? "핵심 성분" : "Key"}</span>
                    <span className="text-[#241E1A]/75">{ko ? p.key_ko : p.key_en}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-[90px] shrink-0 text-[#241E1A]/35 font-medium">{ko ? "향" : "Scent"}</span>
                    <span className="text-[#241E1A]/75">{ko ? p.scent_ko : p.scent_en}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-[90px] shrink-0 text-[#241E1A]/35 font-medium">{ko ? "이런 분께" : "For"}</span>
                    <span className="text-[#241E1A]/75">{ko ? p.for_ko : p.for_en}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── E. TRUST ICONS ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14">
        <div className="bg-[#E7F1F4] rounded-3xl px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" fill="#2E9FC4" opacity=".15" stroke="#2E9FC4" strokeWidth="1.5"/></svg>, label: ko ? "pH 5.5 약산성" : "pH 5.5 mildly acidic" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 20 8 20 16c0 4-3.5 6-8 7-4.5-1-8-3-8-7C4 8 12 3 12 3z" fill="#2E9FC4" opacity=".15" stroke="#2E9FC4" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 8v10M12 12l-3-2M12 12l3-2M12 16l-2.5-1.5M12 16l2.5-1.5" stroke="#2E9FC4" strokeWidth="1.2" strokeLinecap="round"/></svg>, label: ko ? "자연유래 86.8%" : "86.8% naturally derived" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2E9FC4" strokeWidth="1.5" fill="#2E9FC4" opacity=".08"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: ko ? "파라벤 프리" : "Paraben free" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#2E9FC4" opacity=".15" stroke="#2E9FC4" strokeWidth="1.5"/></svg>, label: ko ? "동물실험 프리" : "Cruelty free" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center">
                <div className="w-[68px] h-[68px] rounded-full bg-white shadow-sm flex items-center justify-center">{t.icon}</div>
                <span className="text-[16px] font-medium text-[#155874] leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── F. CTA ── */}
      <div className="text-center pb-24">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2.5 rounded-full px-10 py-4 text-white text-[18px] font-[var(--font-fredoka)] font-semibold border-none cursor-pointer transition-all hover:shadow-[0_8px_28px_rgba(21,88,116,.25)] hover:scale-[1.02]"
          style={{ backgroundColor: "#155874" }}
        >
          ▶ {ko ? "구매처 · 문의하기" : "Shop · Contact us"}
        </button>
      </div>
    </section>
  );
}
