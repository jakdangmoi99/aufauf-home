interface CompanySectionProps {
  ko: boolean;
}

export default function CompanySection({ ko }: CompanySectionProps) {
  return (
    <section
      id="company"
      className="scroll-mt-16 px-[clamp(18px,4vw,48px)] py-[84px]"
    >
      <div className="max-w-[1120px] mx-auto">
        <span className="font-[var(--font-fredoka)] text-[16px] font-medium tracking-[.16em] uppercase text-[#2E9FC4]">
          About AUF AUF
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-[46px] mt-4 items-stretch">
          <div>
            <h2 className="font-[var(--font-fredoka)] font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.1] tracking-tight mb-[18px]">
              {ko
                ? "잘 씻는 것에서 시작되는 뷰티"
                : "Beauty begins with a good wash"}
            </h2>
            <p className="text-base leading-[1.8] text-[#241E1A]/72 mb-[26px]">
              {ko
                ? '"우리는 모든 뷰티의 시작은 잘 씻는 것에서 시작된다고 믿습니다." 어푸어푸는 머리부터 발끝까지 몸을 깨우고, 기분 좋은 휴식과 스트레스 해소의 경험을 선사하며 몸과 마음을 함께 씻어줍니다.'
                : '"We believe all beauty begins with washing well." auf auf wakes up every part of you, head to toe — a feel-good pause that washes body and mind together.'}
            </p>
            <div className="flex flex-col gap-3.5">
              <div className="border-l-2 border-[#2E9FC4] pl-[15px]">
                <div className="font-[var(--font-fredoka)] text-[16px] tracking-[.1em] uppercase text-[#2E9FC4] mb-[3px]">
                  Vision
                </div>
                <div className="text-[16px] text-[#241E1A]/88">
                  {ko
                    ? "씻는 시간을 감정까지 정화하는 다정한 루틴으로 바꾸는 것."
                    : "Turning bath time into a kind ritual that cleanses even your emotions."}
                </div>
              </div>
              <div className="border-l-2 border-[#E8963A] pl-[15px]">
                <div className="font-[var(--font-fredoka)] text-[16px] tracking-[.1em] uppercase text-[#C87A1E] mb-[3px]">
                  Mission
                </div>
                <div className="text-[16px] text-[#241E1A]/88">
                  {ko
                    ? "귀찮던 클렌징을 기다려지는 시간으로."
                    : "Turning a chore into a moment you look forward to."}
                </div>
              </div>
            </div>

            {/* Natural Origin - below Mission */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 bg-[#E7F1F4] rounded-2xl px-4 sm:px-6 py-5">
              {/* Leaf icon */}
              <div className="flex-shrink-0">
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C24 4 40 10 40 28C40 36 34 42 24 44C14 42 8 36 8 28C8 10 24 4 24 4Z" fill="#C4E6D3"/>
                  <path d="M24 4C24 4 40 10 40 28C40 36 34 42 24 44C14 42 8 36 8 28C8 10 24 4 24 4Z" stroke="#2E9FC4" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M24 12V38" stroke="#2E9FC4" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M24 20L17 15" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 20L31 15" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 27L16 22" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 27L32 22" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 34L18 30" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M24 34L30 30" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-[var(--font-fredoka)] text-[36px] sm:text-[48px] font-bold leading-none text-[#155874]">
                  86.8<span className="text-[26px]">%</span>
                </span>
                <div>
                  <span className="inline-block font-[var(--font-fredoka)] text-[16px] font-semibold tracking-[.12em] uppercase text-[#2E9FC4] mb-1">
                    {ko ? "자연유래" : "Natural Origin"}
                  </span>
                  <div className="text-[16px] text-[#241E1A]/70 leading-[1.5]">
                    {ko
                      ? "전 제품 자연유래 성분 86.8% 이상. 히말라야 핑크솔트와 살구씨 등 순한 성분으로."
                      : "Over 86.8% natural-origin ingredients — Himalayan pink salt, apricot seeds and more."}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid photos */}
          <div className="relative min-h-[260px] md:min-h-[340px] flex flex-col items-center justify-center">
            {/* Polaroid 1 - back, tilted left */}
            <div className="absolute top-4 left-2 w-[70%] md:w-[85%] rotate-[-4deg] bg-white rounded-md p-2.5 pb-10 shadow-[0_8px_30px_rgba(36,30,26,.18)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/natural-ingredients.png"
                alt="model"
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
            </div>
            {/* Polaroid 2 - front, tilted right */}
            <div className="absolute top-10 right-2 w-[65%] md:w-[80%] rotate-[3deg] bg-white rounded-md p-2.5 pb-14 shadow-[0_12px_36px_rgba(36,30,26,.22)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/natural-ingredients.png"
                alt="model"
                className="w-full aspect-[4/3] object-cover object-top rounded-sm"
              />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="font-[var(--font-fredoka)] text-[16px] text-[#241E1A]/50 tracking-wider">auf auf · natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
