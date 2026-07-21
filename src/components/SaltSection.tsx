"use client";

import { useState } from "react";

function SaltCarousel({ salt, ko }: { salt: typeof saltData; ko: boolean }) {
  const [offset, setOffset] = useState(0);
  const [tapped, setTapped] = useState<string | null>(null);
  const maxOffsetMobile = salt.length - 1;
  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(salt.length - 1, o + 1));

  const handleTap = (num: string, e: React.MouseEvent) => {
    if ("ontouchstart" in window) {
      e.preventDefault();
      setTapped(tapped === num ? null : num);
    }
  };

  return (
    <div className="relative mt-[18px]">
      {/* Navigation arrows */}
      {offset > 0 && (
        <button
          onClick={prev}
          className="absolute left-[-8px] md:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white shadow-[0_4px_16px_rgba(36,30,26,.15)] flex items-center justify-center text-[#241E1A] text-xl cursor-pointer hover:bg-[#241E1A] hover:text-white transition-colors"
        >
          ‹
        </button>
      )}
      {((offset < maxOffsetMobile)) && (
        <button
          onClick={next}
          className="absolute right-[-8px] md:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white shadow-[0_4px_16px_rgba(36,30,26,.15)] flex items-center justify-center text-[#241E1A] text-xl cursor-pointer hover:bg-[#241E1A] hover:text-white transition-colors"
        >
          ›
        </button>
      )}

      {/* Cards - 1 on mobile, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {/* Mobile: show 1 card at offset; Desktop: show 3 cards starting at offset (clamped) */}
        {salt
          .slice(offset, offset + 3)
          .map((item, idx) => (
          <div
            key={item.num}
            onClick={(e) => handleTap(item.num, e)}
            className={`group relative flex flex-col items-center text-center rounded-[26px] px-[18px] pt-7 pb-6 overflow-hidden shadow-[0_12px_34px_rgba(36,30,26,.08)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(36,30,26,.14)] cursor-pointer ${idx > 0 ? "hidden md:flex" : ""}`}
            style={{ background: `linear-gradient(180deg, ${item.color}, rgba(255,255,255,.5))` }}
          >
            {/* Desktop: hover overlay */}
            <a href="/products#salt" className="absolute inset-0 z-20 rounded-[26px] hidden group-hover:flex items-center justify-center bg-[#241E1A]/40 transition-opacity duration-300">
              <span className="px-7 py-3 rounded-full bg-white text-[16px] font-[var(--font-fredoka)] font-semibold text-[#241E1A] shadow-lg">
                {ko ? "자세히 보기" : "See details"}
              </span>
            </a>
            {/* Mobile: tap overlay */}
            {tapped === item.num && (
              <a href="/products#salt" className="absolute inset-0 z-20 rounded-[26px] flex items-center justify-center bg-[#241E1A]/40 md:hidden animate-[fadeIn_.3s_ease]">
                <span className="px-7 py-3 rounded-full bg-white text-[16px] font-[var(--font-fredoka)] font-semibold text-[#241E1A] shadow-lg">
                  {ko ? "자세히 보기" : "See details"}
                </span>
              </a>
            )}
            <div className="relative w-full h-[240px] md:h-[320px] flex items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.en}
                className="h-[260px] md:h-[348px] w-auto max-w-none drop-shadow-[0_14px_22px_rgba(36,30,26,.16)]"
              />
            </div>
            <span
              className="font-[var(--font-cormorant)] font-semibold text-[26px] leading-[1.1] mt-4"
              style={{ color: item.deep }}
            >
              {item.en}
            </span>
            <span
              className="text-[15px] opacity-80 mt-[3px]"
              style={{ color: item.deep }}
            >
              {ko ? item.ko : item.en}
            </span>
            <span
              className="w-6 h-px opacity-40 my-[11px]"
              style={{ background: item.deep }}
            />
            <span
              className="text-[14px] opacity-75"
              style={{ color: item.deep }}
            >
              {ko ? item.notes_ko : item.notes_en}
            </span>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {salt.map((_, i) => (
          <button
            key={i}
            onClick={() => setOffset(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
              i === offset ? "bg-[#B0544F]" : "bg-[#241E1A]/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const saltData = [
  {
    num: "01",
    en: "Rose Petal Bliss",
    ko: "로즈 페탈 블리스",
    notes_ko: "다마스크 장미 · 살구씨",
    notes_en: "Damask Rose · Apricot Seeds",
    color: "#F1CBC8",
    deep: "#B0544F",
    img: "/images/salt-rose.png",
    cut: "/images/salt-rose-cut.png",
    hover: "/images/hover-salt-rose.png",
  },
  {
    num: "02",
    en: "Golden Coconut Glow",
    ko: "골든 코코넛 글로우",
    notes_ko: "비타민 B·C·E · 살구씨",
    notes_en: "Vitamin B·C·E · Apricot Seeds",
    color: "#EEE3B6",
    deep: "#9A7A22",
    img: "/images/salt-golden.png",
    cut: "/images/salt-golden-cut.png",
    hover: "/images/hover-salt-golden.png",
  },
  {
    num: "03",
    en: "White Musk Breeze",
    ko: "화이트 머스크 브리즈",
    notes_ko: "PHA & BHA · 살구씨",
    notes_en: "PHA & BHA · Apricot Seeds",
    color: "#C7E7D5",
    deep: "#39835F",
    img: "/images/salt-musk.png",
    cut: "/images/salt-musk-cut.png",
    hover: "/images/hover-salt-musk.png",
  },
  {
    num: "04",
    en: "Lavender Calm",
    ko: "라벤더 캄",
    notes_ko: "라벤더 & 로즈마리 · 살구씨",
    notes_en: "Lavender & Rosemary · Apricot Seeds",
    color: "#C6DFEB",
    deep: "#3B7196",
    img: "/images/salt-lavender.png",
    cut: "/images/salt-lavender-cut.png",
    hover: "/images/hover-salt-lavender.png",
  },
];

interface SaltSectionProps {
  ko: boolean;
}

export default function SaltSection({ ko }: SaltSectionProps) {
  return (
    <div className="max-w-[1120px] mx-auto mt-10 px-4 md:px-0">
      {/* Salt Banner */}
      <div className="grid grid-cols-1 md:grid-cols-[.95fr_1.05fr] gap-0 items-stretch rounded-[34px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(36,30,26,.1)]">
        {/* Left: branding */}
        <div className="flex flex-col justify-center p-[36px_clamp(22px,3vw,44px)]">
          <span className="font-[var(--font-fredoka)] text-[13px] tracking-[.14em] uppercase text-[#B0544F]">
            Himalayan Pink Salt Therapy · 4-in-1
          </span>
          <h2 className="font-[var(--font-fredoka)] font-semibold text-[clamp(28px,3.4vw,42px)] leading-[1.06] tracking-tight my-[10px] mb-[14px]">
            {ko ? (
              <>4-in-1 케어의 시작<br />오일 스크럽 바디워시</>
            ) : (
              <>The start of 4-in-1 care<br />Oil Scrub Body Wash</>
            )}
          </h2>
          <p className="text-[15.5px] leading-[1.8] text-[#241E1A]/68 mb-5">
            {ko ? (
              <>바디워시 · 스크럽 · 입욕솔트 · 버블배스를 한 병에.<br />히말라야 핑크솔트와 살구씨가 매끈하게 케어합니다.</>
            ) : (
              <>Body wash, scrub, bath salt and bubble bath in one.<br />Himalayan pink salt and apricot seeds for smooth care.</>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {(ko
              ? ["자연유래 86.8%", "히말라야 핑크솔트", "500·1000ml"]
              : ["86.8% natural origin", "Himalayan pink salt", "500·1000ml"]
            ).map((c) => (
              <span
                key={c}
                className="px-[14px] py-[7px] rounded-full bg-[#F6F1EA] text-[15px] font-medium text-[#B0544F]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        {/* Right: main product image */}
        <div className="relative min-h-[280px] md:min-h-[524px] overflow-hidden order-first md:order-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/salt-main.png"
            alt="Pink Salt Therapy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Salt Product Carousel */}
      <SaltCarousel salt={saltData} ko={ko} />
    </div>
  );
}
