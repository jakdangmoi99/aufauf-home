export default function AboutHero({ ko }: { ko: boolean }) {
  return (
    <section className="relative mt-16 overflow-hidden" style={{ minHeight: "clamp(360px, 55vw, 560px)" }}>
      {/* Background image with subtle blur */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg-4.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(4px) brightness(0.95) saturate(1.1)", transform: "scale(1.02)" }}
      />
      {/* Warm overlay for retro/emotional mood */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(250,245,236,.08) 0%, rgba(250,245,236,.15) 50%, rgba(250,245,236,.25) 100%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col items-center justify-center text-center px-6 md:px-14" style={{ minHeight: "clamp(360px, 55vw, 560px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aufauf-logo.png"
          alt="auf auf"
          className="h-10 md:h-14 w-auto mb-6 brightness-0 invert"
        />
        <h1 className="font-[var(--font-fredoka)] font-bold text-[clamp(32px,6vw,56px)] text-white leading-[1.1] mb-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,.2)" }}>
          {ko ? "자기돌봄의 영감" : "That Inspires Self-Care"}
        </h1>
        <p className="font-[var(--font-cormorant)] italic text-[clamp(20px,3vw,28px)] text-white/80 max-w-[600px]" style={{ textShadow: "0 1px 10px rgba(0,0,0,.15)" }}>
          {ko
            ? "씻어내는 시간을 뷰티의 시작점으로"
            : "Where your beauty ritual begins"}
        </p>
      </div>
    </section>
  );
}
