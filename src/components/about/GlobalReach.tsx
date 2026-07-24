"use client";

import { useState } from "react";

const markets = [
  { name: "Korea", x: "80.8%", y: "31.9%" },
  { name: "USA", x: "26.4%", y: "30.8%" },
  { name: "Canada", x: "26.7%", y: "18.8%" },
  { name: "Germany", x: "52.4%", y: "22.2%" },
  { name: "United Kingdom", x: "49.7%", y: "21.2%" },
  { name: "UAE", x: "63.7%", y: "41.7%" },
  { name: "Saudi Arabia", x: "61.4%", y: "41.7%" },
  { name: "Qatar", x: "62.9%", y: "40.7%" },
  { name: "Kuwait", x: "61.9%", y: "37.8%" },
  { name: "Bahrain", x: "62.8%", y: "40.2%" },
  { name: "Oman", x: "64.5%", y: "43.9%" },
  { name: "Iraq", x: "60.9%", y: "35.1%" },
  { name: "Jordan", x: "58.9%", y: "36.6%" },
  { name: "Philippines", x: "81.5%", y: "50%" },
  { name: "Malaysia", x: "76.5%", y: "56.2%" },
];

export default function GlobalReach({ ko }: { ko: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-[#E7F1F4]/50 px-2 md:px-[clamp(18px,4vw,48px)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-10">
          <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-3 block">
            Global
          </span>
          <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(24px,4vw,36px)] text-[#241E1A] tracking-tight mb-2">
            {ko ? "15개국이 함께 어푸어푸" : "15 countries washing with auf auf"}
          </h2>
          <p className="text-[16px] text-[#241E1A]/45">
            {ko ? "2025.12 기준" : "as of Dec 2025"}
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[2000/834] max-w-full md:max-w-[960px] mx-auto overflow-visible pt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/world-map.png" alt="global reach" className="absolute inset-0 w-full h-full object-contain" />
          {markets.map((pin) => {
            const active = hovered === pin.name;
            return (
              <span
                key={pin.name}
                onMouseEnter={() => setHovered(pin.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(hovered === pin.name ? null : pin.name)}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] flex items-center justify-center cursor-pointer"
                style={{ left: pin.x, top: pin.y, zIndex: active ? 50 : 3 }}
              >
                <span className="w-3 h-3 rounded-full bg-[#F6B12E] shadow-[0_0_0_3px_rgba(231,241,244,.95),0_0_14px_rgba(246,177,46,.8)]" />
                <span className="absolute w-3 h-3 rounded-full bg-[#F6B12E]/70" style={{ animation: "auf-ping 3s ease-out infinite" }} />
                {active && (
                  <>
                    <span className="absolute w-[26px] h-[26px] rounded-full border-2 border-[#F6B12E]" />
                    <span className="absolute bottom-[26px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#241E1A] text-white font-[var(--font-fredoka)] text-[12.5px] font-medium px-[11px] py-[5px] rounded-full shadow-[0_6px_16px_rgba(0,0,0,.28)]">
                      {pin.name}
                    </span>
                  </>
                )}
              </span>
            );
          })}
        </div>

        {/* Country pills */}
        <div className="flex flex-wrap gap-[7px] md:gap-[9px] mt-[30px] justify-center px-2 md:px-0">
          {markets.map((m) => (
            <span
              key={m.name}
              onMouseEnter={() => setHovered(m.name)}
              onMouseLeave={() => setHovered(null)}
              className={`px-[11px] md:px-[15px] py-1.5 md:py-2 rounded-full font-[var(--font-fredoka)] text-[12px] md:text-[13.5px] whitespace-nowrap cursor-pointer transition-all duration-200 ${
                hovered === m.name
                  ? "border border-[#F6B12E] bg-[#F6B12E] text-[#241E1A]"
                  : "border border-[#241E1A]/18 bg-white/50 text-[#241E1A]/80"
              }`}
            >
              {m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
