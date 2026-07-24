export default function AboutHero({ ko }: { ko: boolean }) {
  return (
    <section className="relative mt-16 overflow-hidden" style={{ minHeight: "clamp(360px, 55vw, 560px)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about-hero.jpg"
        alt="auf auf"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,.45) 0%, rgba(0,0,0,.05) 50%, transparent 100%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-end p-8 md:p-14 md:pb-16" style={{ minHeight: "clamp(360px, 55vw, 560px)" }}>
        {/* Logo mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aufauf-logo.png"
          alt="auf auf"
          className="h-8 md:h-10 w-auto mb-4 brightness-0 invert"
        />
        <h1 className="font-[var(--font-fredoka)] font-bold text-[clamp(28px,5.5vw,48px)] text-white leading-[1.1] mb-3" style={{ textShadow: "0 2px 16px rgba(0,0,0,.15)" }}>
          {ko ? "자기돌봄의 영감" : "That Inspires Self-Care"}
        </h1>
        <p className="font-[var(--font-cormorant)] italic text-[clamp(18px,2.5vw,24px)] text-white/75 max-w-[500px]">
          {ko
            ? "씻어내는 시간을 뷰티의 시작점으로"
            : "Where your beauty ritual begins"}
        </p>
      </div>
    </section>
  );
}
