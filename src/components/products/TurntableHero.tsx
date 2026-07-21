"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const lineups = [
  {
    id: "salt",
    name_ko: "Himalayan Salt Therapy",
    name_en: "Himalayan Salt Therapy",
    desc_ko: "4가지 향 · 4-in-1 케어",
    desc_en: "4 scents · 4-in-1 care",
    color: "#2E9FC4",
    mainImg: "/images/tape-salt.png",
    tapeColor: "#d6ecf4",
    tapeBorder: "#a8d4e8",
    labelColor: "#155874",
  },
  {
    id: "juicy",
    name_ko: "Juicy Body Wash",
    name_en: "Juicy Body Wash",
    desc_ko: "3가지 향 · 상큼한 열대과일",
    desc_en: "3 scents · Fresh tropical fruits",
    color: "#E8541C",
    mainImg: "/images/tape-juicy.png",
    tapeColor: "#fce8d0",
    tapeBorder: "#f0c89a",
    labelColor: "#993C1D",
  },
];

/* ── Reel SVG component ── */
function CassetteReel({ size, tapeRadius, speed }: { size: number; tapeRadius: number; speed: number }) {
  const c = size / 2;
  const hubR = size * 0.18;
  const tapeR = tapeRadius;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
      <defs>
        <radialGradient id={`hub-${speed}`} cx="38%" cy="38%">
          <stop offset="0%" stopColor="#e8e0d4" />
          <stop offset="50%" stopColor="#d0c8ba" />
          <stop offset="100%" stopColor="#b8b0a2" />
        </radialGradient>
      </defs>

      {/* Opaque dark background for tape area */}
      <circle cx={c} cy={c} r={tapeR + 2} fill="#1a1a1e" />

      {/* Tape wound layers */}
      {Array.from({ length: 8 }, (_, i) => {
        const r = hubR + 3 + i * ((tapeR - hubR - 3) / 8);
        return (
          <circle key={i} cx={c} cy={c} r={r} fill="none"
            stroke={i % 2 === 0 ? "#2c2218" : "#3a2e22"}
            strokeWidth={(tapeR - hubR) / 9}
          />
        );
      })}

      {/* Tape edge */}
      <circle cx={c} cy={c} r={tapeR} fill="none" stroke="#3d3530" strokeWidth="1.5" />
      <circle cx={c} cy={c} r={tapeR + 1} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="0.5" />

      {/* Spinning hub */}
      <g style={{ transformOrigin: `${c}px ${c}px`, animation: `tape-spin ${speed}s linear infinite` }}>
        <circle cx={c} cy={c} r={hubR} fill={`url(#hub-${speed})`} />
        <circle cx={c} cy={c} r={hubR} fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="0.6" />
        <circle cx={c} cy={c} r={hubR - 3} fill="none" stroke="rgba(0,0,0,.08)" strokeWidth="0.5" />

        {/* Pentagon center hole */}
        <polygon
          points={[0, 1, 2, 3, 4].map((i) => {
            const a = (i * 72 - 90) * Math.PI / 180;
            return `${c + hubR * 0.42 * Math.cos(a)},${c + hubR * 0.42 * Math.sin(a)}`;
          }).join(" ")}
          fill="#3a3530" stroke="rgba(0,0,0,.15)" strokeWidth="0.5"
        />

        {/* Notches on hub edge */}
        {[0, 72, 144, 216, 288].map((deg) => {
          const a = (deg - 90) * Math.PI / 180;
          return (
            <circle key={deg}
              cx={c + (hubR - 2) * Math.cos(a)}
              cy={c + (hubR - 2) * Math.sin(a)}
              r="1.6" fill="rgba(0,0,0,.12)"
            />
          );
        })}

        {/* Shine highlight */}
        <ellipse cx={c - 3} cy={c - 3} rx={hubR * 0.35} ry={hubR * 0.22}
          fill="rgba(255,255,255,.15)" transform={`rotate(-25 ${c - 3} ${c - 3})`} />
      </g>
    </svg>
  );
}

export default function TurntableHero({ ko }: { ko: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef(0);
  const total = lineups.length;

  const go = useCallback((dir: 1 | -1) => setActive((p) => (p + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, go]);

  const nav = useCallback((dir: 1 | -1) => {
    go(dir);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), 4500);
  }, [go]);

  const lineup = lineups[active];

  return (
    <section
      className="relative mt-16 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 34) nav(dx < 0 ? 1 : -1);
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg-3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(6px) brightness(0.9) saturate(1.1)", transform: "scale(1.03)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(247,246,243,.05)" }} />

      <style>{`
        @keyframes tape-spin { to { transform: rotate(360deg); } }
        @keyframes dot-pulse { 0%,100% { opacity:1; } 50% { opacity:.3; } }
      `}</style>

      <div className="relative max-w-[1100px] mx-auto px-5 py-10 md:py-14">
        {/* Header */}
        <div className="text-center mb-7 md:mb-9">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-[15px] font-[var(--font-fredoka)] text-white/80 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#2E9FC4]" style={{ animation: "dot-pulse 2s ease-in-out infinite" }} />
            Now Playing
          </span>
          <h1 className="font-[var(--font-fredoka)] font-bold text-[clamp(30px,6vw,50px)] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.15)] mt-4 tracking-tight">
            Bathtime Playlist
          </h1>
          <p className="text-white/50 mt-2 font-[var(--font-cormorant)] italic text-[clamp(18px,2.5vw,22px)]">
            {ko ? "오늘의 플레이리스트를 골라보세요" : "Pick your playlist for today"}
          </p>
        </div>

        {/* ── Cassette ── */}
        <div className="relative mx-auto" style={{ maxWidth: 640 }}>
          <div
            className="relative rounded-[20px] md:rounded-[24px] transition-all duration-700"
            style={{
              background: lineup.tapeColor,
              border: `2px solid ${lineup.tapeBorder}`,
              boxShadow: "0 16px 48px rgba(36,30,26,.1), inset 0 1px 0 rgba(255,255,255,.6)",
              padding: "clamp(14px, 2.5vw, 22px)",
            }}
          >
            {/* Top label */}
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="font-[var(--font-fredoka)] text-[12px] md:text-[13px] uppercase tracking-[.18em]" style={{ color: lineup.labelColor }}>
                auf auf · vol.{active + 1}
              </span>
              <span className="font-[var(--font-fredoka)] text-[11px] uppercase tracking-[.15em] opacity-30" style={{ color: lineup.labelColor }}>
                SIDE {active === 0 ? "A" : "B"}
              </span>
            </div>

            {/* Tape window */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#0e1117" }}>
              {/* Image slider */}
              <div
                className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
                style={{ width: `${total * 100}%`, transform: `translateX(-${active * (100 / total)}%)` }}
              >
                {lineups.map((l) => (
                  <div key={l.id} className="relative h-full" style={{ width: `${100 / total}%` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.mainImg} alt={l.id} className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                ))}
              </div>

              {/* Reels (positioned over image, opaque backgrounds block image) */}
              <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 z-[6]">
                <CassetteReel size={90} tapeRadius={32} speed={8} />
              </div>
              <div className="absolute top-1/2 right-[30%] translate-x-1/2 -translate-y-1/2 z-[6]">
                <CassetteReel size={90} tapeRadius={32} speed={6} />
              </div>

              {/* (tape path removed — reels only) */}

              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none z-[7]" style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,.2), inset 0 -1px 4px rgba(0,0,0,.1)" }} />
            </div>

            {/* Bottom label */}
            <div className="flex items-center justify-between px-2 mt-2">
              <span className="font-[var(--font-fredoka)] text-[13px] md:text-[14px] font-semibold tracking-wide" style={{ color: lineup.labelColor }}>
                {ko ? lineup.name_ko : lineup.name_en}
              </span>
              <span className="font-[var(--font-fredoka)] text-[11px] tracking-wider opacity-25" style={{ color: lineup.labelColor }}>
                MADE IN KOREA
              </span>
            </div>

            {/* Screw holes */}
            {["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-[7px] h-[7px] rounded-full`} style={{ background: "radial-gradient(circle, rgba(0,0,0,.06), rgba(0,0,0,.02))", boxShadow: "inset 0 1px 1px rgba(0,0,0,.06)" }} />
            ))}
          </div>

          {/* Nav arrows */}
          <button onClick={() => nav(-1)} className="absolute left-[-44px] md:left-[-72px] top-1/2 -translate-y-1/2 px-3 py-6 text-white/50 text-5xl md:text-6xl cursor-pointer border-none bg-transparent hover:text-white/90 transition-colors z-10 select-none font-light" style={{ textShadow: "0 2px 10px rgba(0,0,0,.15)" }}>‹</button>
          <button onClick={() => nav(1)} className="absolute right-[-44px] md:right-[-72px] top-1/2 -translate-y-1/2 px-3 py-6 text-white/50 text-5xl md:text-6xl cursor-pointer border-none bg-transparent hover:text-white/90 transition-colors z-10 select-none font-light" style={{ textShadow: "0 2px 10px rgba(0,0,0,.15)" }}>›</button>
        </div>

        {/* CTA */}
        <div className="text-center mt-7">
          <div className="flex justify-center gap-2.5 mb-5">
            {lineups.map((l, i) => (
              <button key={l.id}
                onClick={() => { setActive(i); if (timerRef.current) clearInterval(timerRef.current); timerRef.current = setInterval(() => go(1), 4500); }}
                className={`rounded-full border-none cursor-pointer transition-all duration-300 ${i === active ? "w-8 h-2.5 opacity-100" : "w-2.5 h-2.5 opacity-25 hover:opacity-45"}`}
                style={{ backgroundColor: i === active ? lineup.color : "#241E1A" }}
              />
            ))}
          </div>
          <button
            onClick={() => document.getElementById(lineup.id)?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-white text-[17px] font-[var(--font-fredoka)] font-semibold border-none cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ backgroundColor: lineup.color }}
          >
            ▶ {ko ? "이 플레이리스트 재생" : "Play this playlist"}
          </button>
        </div>
      </div>
    </section>
  );
}
