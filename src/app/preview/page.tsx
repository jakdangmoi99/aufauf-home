"use client";

import { useState } from "react";

const bgs = [
  { src: "/images/hero-bg-1.png", label: "1. Retro California poolside" },
  { src: "/images/hero-bg-2.png", label: "2. Below the knees crop" },
  { src: "/images/hero-bg-3.png", label: "3. Rain shower head" },
  { src: "/images/hero-bg-4.png", label: "4. Rain shower head v2" },
];

export default function PreviewPage() {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ background: "#f7f6f3", minHeight: "100vh", paddingTop: "80px" }}>
      <h1 className="font-[var(--font-fredoka)] text-[28px] font-bold text-center text-[#241E1A] mb-4">
        배경 이미지 비교 프리뷰
      </h1>

      {/* Selector */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {bgs.map((bg, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-5 py-2.5 rounded-full text-[15px] font-[var(--font-fredoka)] font-medium border-none cursor-pointer transition-all ${
              i === selected
                ? "bg-[#2E9FC4] text-white shadow-lg"
                : "bg-[#241E1A]/8 text-[#241E1A]/60 hover:bg-[#241E1A]/15"
            }`}
          >
            {bg.label}
          </button>
        ))}
      </div>

      {/* Preview: simulated cassette hero with background */}
      <div className="mx-auto">
        <p className="text-center text-[15px] text-[#241E1A]/40 mb-3">
          블러 강도: 강 (12px) — 카세트 테이프가 위에 올라감
        </p>

        <section
          className="relative overflow-hidden"
          style={{ background: "#f7f6f3" }}
        >
          {/* Background image with blur */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgs[selected].src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "blur(6px) brightness(0.9) saturate(1.1)", transform: "scale(1.03)" }}
          />
          {/* Tint overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(247,246,243,.05)" }} />

          <div className="relative max-w-[1100px] mx-auto px-5 py-10 md:py-14">
            {/* Badge */}
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm text-[15px] font-[var(--font-fredoka)] text-[#241E1A]/70 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#2E9FC4]" />
                Now Playing
              </span>
              <h1 className="font-[var(--font-fredoka)] font-bold text-[clamp(30px,6vw,50px)] text-[#241E1A] mt-4 tracking-tight drop-shadow-[0_1px_8px_rgba(255,255,255,.5)]">
                Bathtime Playlist
              </h1>
              <p className="text-[#241E1A]/50 mt-2 font-[var(--font-cormorant)] italic text-[clamp(18px,2.5vw,22px)]">
                오늘의 플레이리스트를 골라보세요
              </p>
            </div>

            {/* Cassette mockup */}
            <div className="relative mx-auto" style={{ maxWidth: 640 }}>
              <div className="relative rounded-[20px] md:rounded-[24px]" style={{
                background: "rgba(214,236,244,.85)",
                border: "2px solid rgba(168,212,232,.6)",
                boxShadow: "0 16px 48px rgba(36,30,26,.15), inset 0 1px 0 rgba(255,255,255,.6)",
                padding: "clamp(14px, 2.5vw, 22px)",
                backdropFilter: "blur(8px)",
              }}>
                <div className="flex items-center justify-between px-2 mb-2">
                  <span className="font-[var(--font-fredoka)] text-[13px] uppercase tracking-[.18em] text-[#155874]">auf auf · vol.1</span>
                  <span className="font-[var(--font-fredoka)] text-[11px] uppercase tracking-[.15em] text-[#155874]/30">SIDE A</span>
                </div>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-[#0e1117]" style={{ aspectRatio: "16/9", boxShadow: "inset 0 2px 8px rgba(0,0,0,.2)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/salt-main.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,.2), inset 0 -1px 4px rgba(0,0,0,.1)" }} />
                </div>
                <div className="flex items-center justify-between px-2 mt-2">
                  <span className="font-[var(--font-fredoka)] text-[14px] font-semibold tracking-wide text-[#155874]">Himalayan Salt Therapy</span>
                  <span className="font-[var(--font-fredoka)] text-[11px] tracking-wider text-[#155874]/25">MADE IN KOREA</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-7">
              <p className="text-[16px] text-[#241E1A]/45 mb-4">4가지 향 · 4-in-1 케어</p>
              <button className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 bg-[#2E9FC4] text-white text-[17px] font-[var(--font-fredoka)] font-semibold border-none shadow-lg">
                ▶ 이 플레이리스트 재생
              </button>
            </div>
          </div>
        </section>

        {/* Also show without blur for reference */}
        <p className="text-center text-[15px] text-[#241E1A]/40 mt-10 mb-3">
          참고: 원본 이미지 (블러 없음)
        </p>
        <div className="rounded-2xl overflow-hidden shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bgs[selected].src} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
