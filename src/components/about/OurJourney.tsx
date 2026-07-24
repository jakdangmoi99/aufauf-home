const milestones = [
  {
    year: "2024",
    title_ko: "글로벌 전시 참가",
    title_en: "Global Exhibitions",
    desc_ko: "Las Vegas · Kuala Lumpur · Hong Kong",
    desc_en: "Las Vegas · Kuala Lumpur · Hong Kong",
    hasImage: false,
  },
  {
    year: "2025",
    title_ko: "15개국 수출",
    title_en: "Export to 15 Countries",
    desc_ko: "한국, 미국, 캐나다, 독일, 영국, UAE, 사우디, 카타르, 쿠웨이트, 바레인, 오만, 이라크, 요르단, 필리핀, 말레이시아",
    desc_en: "Korea, USA, Canada, Germany, UK, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Iraq, Jordan, Philippines, Malaysia",
    hasImage: false,
  },
  {
    year: "2025",
    title_ko: "국내 오프라인 입점",
    title_en: "Domestic Retail Launch",
    desc_ko: "부산 오시리아 약국스토어 입점",
    desc_en: "Busan Osiria Pharmacy Store",
    hasImage: false,
  },
];

export default function OurJourney({ ko }: { ko: boolean }) {
  return (
    <section className="max-w-[900px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-3 block">
          Our Journey
        </span>
        <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(26px,4.5vw,38px)] text-[#241E1A] tracking-tight">
          {ko ? "어푸어푸의 여정" : "The auf auf Story"}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[#2E9FC4]/20 md:-translate-x-px" />

        {milestones.map((m, i) => (
          <div key={i} className={`relative flex gap-8 md:gap-0 mb-14 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Dot */}
            <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-1 w-[13px] h-[13px] rounded-full bg-[#2E9FC4] border-[3px] border-[#f7f6f3] z-[2]" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
              <span className="font-[var(--font-fredoka)] text-[28px] font-bold text-[#2E9FC4]/30">{m.year}</span>
              <h4 className="font-[var(--font-fredoka)] font-semibold text-[20px] text-[#241E1A] mt-1">
                {ko ? m.title_ko : m.title_en}
              </h4>
              <p className="text-[16px] text-[#241E1A]/55 mt-2 leading-[1.6]">
                {ko ? m.desc_ko : m.desc_en}
              </p>

              {/* Image placeholder slot */}
              {m.hasImage ? (
                <div className="mt-4 rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(36,30,26,.08)]">
                  {/* Image will go here */}
                  <div className="aspect-[16/9] bg-[#E7F1F4]" />
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border-2 border-dashed border-[#2E9FC4]/15 bg-[#E7F1F4]/30 aspect-[16/9] flex items-center justify-center">
                  <span className="text-[14px] text-[#2E9FC4]/30 font-[var(--font-fredoka)]">
                    {ko ? "사진 추가 예정" : "Photo coming soon"}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
