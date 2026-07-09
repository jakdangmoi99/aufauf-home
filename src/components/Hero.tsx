interface HeroProps {
  ko: boolean;
}

export default function Hero({ ko }: HeroProps) {
  return (
    <>
      {/* Hero Video (full-bleed splash style) */}
      <section
        id="home"
        className="scroll-mt-16 relative h-[50vh] md:h-[82vh] min-h-[320px] md:min-h-[520px] mt-16 overflow-hidden bg-black"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-[1.15]"
        >
          <source src="/images/main-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#2E9FC4]/8" />
        {/* Bottom progress bar */}
        <div className="absolute left-[clamp(16px,4vw,44px)] right-[clamp(16px,4vw,44px)] bottom-[22px] flex items-center gap-[14px] text-white z-10">
          <span className="font-[var(--font-fredoka)] text-xs tracking-wider uppercase opacity-90 whitespace-nowrap">
            ▶ Now Playing
          </span>
          <div className="flex-1 h-1 rounded-sm bg-white/30 relative">
            <span className="absolute left-0 top-0 bottom-0 w-[32%] bg-white rounded-sm" />
          </div>
          <span className="font-[var(--font-fredoka)] text-xs opacity-90 whitespace-nowrap">
            auf auf — Bathtime Playlist
          </span>
        </div>
      </section>

      {/* Hero Text (Spa style typography) */}
      <section
        className="text-center px-[clamp(18px,4vw,48px)] pt-8 md:pt-14 pb-6 max-w-[860px] mx-auto"
      >
        <div className="font-[var(--font-fredoka)] text-[13px] tracking-[.2em] uppercase text-[#2E9FC4] mb-[18px]">
          Made in Korea
        </div>
        <h1 className="m-0 leading-[.98]">
          <span className="block font-[var(--font-cormorant)] italic font-medium text-[clamp(32px,7vw,92px)] text-[#241E1A]">
            Bathtime
          </span>
          <span className="block font-[var(--font-cormorant)] italic font-semibold text-[clamp(32px,7vw,92px)] tracking-tight text-[#2E9FC4] -mt-1">
            Playlist
          </span>
        </h1>
        <p className="max-w-[560px] mx-auto mt-[22px] text-[15px] md:text-[17px] leading-[1.8] text-[#241E1A]/68">
          {ko ? (
            <>씻는 시간을 감정까지 정화하는 다정한 루틴으로.<br />어푸어푸가 당신의 욕실 플레이리스트를 큐레이션합니다.</>
          ) : (
            <>A kind ritual that cleanses your mood —<br />not just your skin. auf auf curates your very own bathtime playlist.</>
          )}
        </p>
        <p className="mt-3.5 mx-auto font-[var(--font-cormorant)] italic text-lg text-[#241E1A]/55">
          {ko
            ? "'어푸어푸'는 물을 끼얹거나 물속에서 숨을 내쉴 때 나는 소리예요."
            : "'auf auf' is the Korean sound of splashing water and exhaling beneath it."}
        </p>
      </section>
    </>
  );
}
