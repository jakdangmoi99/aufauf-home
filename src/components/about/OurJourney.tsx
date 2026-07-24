"use client";

import { useRef } from "react";

const popups = [
  {
    title: "Las Vegas Exhibition",
    location_ko: "미국 라스베이거스",
    location_en: "Las Vegas, USA",
    date: "2024",
    color: "#E7F1F4",
  },
  {
    title: "Kuala Lumpur Exhibition",
    location_ko: "말레이시아 쿠알라룸푸르",
    location_en: "Kuala Lumpur, Malaysia",
    date: "2024",
    color: "#FBF0DC",
  },
  {
    title: "Hong Kong Exhibition",
    location_ko: "홍콩",
    location_en: "Hong Kong",
    date: "2024",
    color: "#F1E7EC",
  },
  {
    title: "Busan Osiria Store",
    location_ko: "부산 오시리아 약국스토어",
    location_en: "Busan Osiria Pharmacy Store",
    date: "2025",
    color: "#E7F1F4",
  },
];

export default function OurJourney({ ko }: { ko: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-3 block">
              Archive
            </span>
            <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(24px,4vw,34px)] text-[#241E1A] tracking-tight">
              {ko ? "어푸어푸가 만난 순간들" : "Moments with auf auf"}
            </h2>
          </div>
          {/* Scroll arrows */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full bg-[#241E1A]/5 flex items-center justify-center text-[#241E1A]/40 text-xl cursor-pointer border-none hover:bg-[#241E1A]/10 transition-colors">‹</button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full bg-[#241E1A]/5 flex items-center justify-center text-[#241E1A]/40 text-xl cursor-pointer border-none hover:bg-[#241E1A]/10 transition-colors">›</button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Left spacer for centering on large screens */}
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />

        {popups.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[400px] snap-start rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(36,30,26,.06)] hover:shadow-[0_12px_32px_rgba(36,30,26,.1)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image area */}
            <div className="aspect-[3/2] flex items-center justify-center" style={{ background: p.color }}>
              {/* Placeholder — replace with real photo */}
              <span className="text-[#241E1A]/10 text-[40px] font-light">📷</span>
            </div>
            {/* Info */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-[var(--font-fredoka)] text-[13px] font-semibold text-[#2E9FC4]">{p.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#241E1A]/15" />
                <span className="text-[13px] text-[#241E1A]/35">{ko ? p.location_ko : p.location_en}</span>
              </div>
              <h4 className="font-[var(--font-fredoka)] font-semibold text-[17px] text-[#241E1A]">{p.title}</h4>
            </div>
          </div>
        ))}

        {/* Coming soon card */}
        <div className="flex-shrink-0 w-[320px] md:w-[400px] snap-start rounded-2xl border-2 border-dashed border-[#241E1A]/8 flex flex-col items-center justify-center gap-2 min-h-[260px]">
          <span className="text-[32px] text-[#241E1A]/10 font-light">+</span>
          <span className="text-[14px] text-[#241E1A]/20 font-[var(--font-fredoka)]">
            {ko ? "더 많은 이야기가 올 예정" : "More coming soon"}
          </span>
        </div>

        {/* Right spacer */}
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
