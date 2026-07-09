"use client";

const juicy = [
  {
    num: "01",
    en: "Mango",
    ko: "망고",
    with_ko: "비타민 C 함유",
    with_en: "with Vitamin C",
    color: "#F6B12E",
    soft: "#FCEBC6",
    tint: "#E8541C",
    img: "/images/mango.png",
    cut: "/images/mango-cut.png",
    hover: "/images/juicy-mango.png",
  },
  {
    num: "02",
    en: "Strawberry",
    ko: "딸기",
    with_ko: "콜라겐 함유",
    with_en: "with Collagen",
    color: "#F2637E",
    soft: "#FBD8E0",
    tint: "#D8283F",
    img: "/images/strawberry.png",
    cut: "/images/strawberry-cut.png",
    hover: "/images/juicy-strawberry.png",
  },
  {
    num: "03",
    en: "Coconut",
    ko: "코코넛",
    with_ko: "히알루론산 함유",
    with_en: "with Hyaluronic Acid",
    color: "#DFCFB0",
    soft: "#F1E9D8",
    tint: "#6E5540",
    img: "/images/coconut.png",
    cut: "/images/coconut-cut.png",
    hover: "/images/juicy-coconut.png",
  },
];

interface JuicySectionProps {
  ko: boolean;
}

export default function JuicySection({ ko }: JuicySectionProps) {
  const claims = ko
    ? ["실리콘·파라벤 프리", "미산성 포뮬라", "500·1000·2000ml"]
    : ["Silicone & paraben free", "Slightly acidic", "500·1000·2000ml"];

  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-0">
      {/* Juicy Banner */}
      <div className="grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-0 items-stretch rounded-[34px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(36,30,26,.06)]">
        {/* Left: main product image */}
        <div className="relative min-h-[280px] md:min-h-[524px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/juicy-main.png"
            alt="Juicy Body Wash"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Right: branding */}
        <div className="flex flex-col justify-center p-[36px_clamp(22px,3vw,44px)]">
          <span className="font-[var(--font-fredoka)] text-[13px] tracking-[.14em] uppercase text-[#F2637E]">
            Juicy Body Wash
          </span>
          <h2 className="font-[var(--font-fredoka)] font-semibold text-[clamp(28px,3.4vw,42px)] leading-[1.06] tracking-tight my-[10px] mb-[14px]">
            {ko ? (
              <>강렬한 열대과일향,<br />경쾌한 샤워</>
            ) : (
              <>Bold tropical scents,<br />a joyful shower</>
            )}
          </h2>
          <p className="text-[15.5px] leading-[1.8] text-[#241E1A]/68 mb-5">
            {ko ? (
              <>망고 · 딸기 · 코코넛 세 가지 향으로 샤워를 깨웁니다.<br />부드럽고 풍성한 거품이 피부를 순하게 클렌징해요.</>
            ) : (
              <>Wake up your shower with mango, strawberry and coconut.<br />Soft, rich lather cleanses skin gently.</>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {claims.map((c) => (
              <span
                key={c}
                className="px-[14px] py-[7px] rounded-full bg-[#F6F1EA] text-[15px] font-medium text-[#B4576E]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Juicy Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[18px]">
        {juicy.map((item) => (
          <a
            key={item.num}
            href="#contact"
            className="group relative flex flex-col items-center text-center rounded-[26px] px-[18px] pt-7 pb-6 overflow-hidden transition-transform duration-400 hover:-translate-y-1.5"
            style={{ background: item.soft }}
          >
            {/* Hover: full card background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.hover}
              alt={`${item.en} detail`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-[26px]"
            />
            {/* Product image area - circle bottom aligned with product bottom */}
            <div className="relative w-full flex-1 flex items-end justify-center min-h-[240px] md:min-h-[320px]">
              {/* White circle background - bottom aligned */}
              <div className="absolute bottom-[66px] left-1/2 -translate-x-1/2 w-[160px] h-[160px] md:w-[216px] md:h-[216px] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(36,30,26,.05)]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.en}
                className="relative z-[1] h-[260px] md:h-[348px] w-auto max-w-none drop-shadow-[0_14px_22px_rgba(36,30,26,.18)]"
              />
            </div>
            <span
              className="font-[var(--font-fredoka)] font-semibold text-[25px] mt-2"
              style={{ color: item.tint }}
            >
              {item.en}
            </span>
            <span
              className="text-[15px] opacity-80 mt-[3px]"
              style={{ color: item.tint }}
            >
              {item.ko}
            </span>
            <span className="text-[14px] text-[#241E1A]/55 mt-2">
              {ko ? item.with_ko : item.with_en}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
