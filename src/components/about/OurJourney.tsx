const popups = [
  {
    title: "Las Vegas Exhibition",
    location_ko: "미국 라스베이거스",
    location_en: "Las Vegas, USA",
    date: "2024",
    hasImage: false,
  },
  {
    title: "Kuala Lumpur Exhibition",
    location_ko: "말레이시아 쿠알라룸푸르",
    location_en: "Kuala Lumpur, Malaysia",
    date: "2024",
    hasImage: false,
  },
  {
    title: "Hong Kong Exhibition",
    location_ko: "홍콩",
    location_en: "Hong Kong",
    date: "2024",
    hasImage: false,
  },
  {
    title: "Busan Osiria Pharmacy Store",
    location_ko: "부산 오시리아 약국스토어",
    location_en: "Busan Osiria Pharmacy Store",
    date: "2025",
    hasImage: false,
  },
];

export default function OurJourney({ ko }: { ko: boolean }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-3 block">
          Pop-up Archive
        </span>
        <h2 className="font-[var(--font-fredoka)] font-bold text-[clamp(26px,4.5vw,38px)] text-[#241E1A] tracking-tight">
          {ko ? "어푸어푸가 만난 순간들" : "Moments with auf auf"}
        </h2>
        <p className="mt-3 text-[17px] text-[#241E1A]/45">
          {ko ? "전시 · 팝업 · 입점 아카이브" : "Exhibitions · Pop-ups · Retail Archive"}
        </p>
      </div>

      {/* Photo gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popups.map((p, i) => (
          <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow-[0_6px_24px_rgba(36,30,26,.06)] hover:shadow-[0_16px_40px_rgba(36,30,26,.1)] transition-all duration-300 hover:-translate-y-1">
            {/* Image slot */}
            {p.hasImage ? (
              <div className="aspect-[4/3] overflow-hidden">
                {/* Image will go here when available */}
                <div className="w-full h-full bg-[#E7F1F4]" />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-[#E7F1F4]/50 flex flex-col items-center justify-center gap-3">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-20">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2E9FC4" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="2" stroke="#2E9FC4" strokeWidth="1.5" />
                  <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#2E9FC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] text-[#2E9FC4]/25 font-[var(--font-fredoka)]">
                  {ko ? "사진 추가 예정" : "Photo coming soon"}
                </span>
              </div>
            )}

            {/* Info */}
            <div className="p-5">
              <span className="font-[var(--font-fredoka)] text-[13px] text-[#2E9FC4] font-semibold">{p.date}</span>
              <h4 className="font-[var(--font-fredoka)] font-semibold text-[18px] text-[#241E1A] mt-1">{p.title}</h4>
              <p className="text-[15px] text-[#241E1A]/45 mt-1">{ko ? p.location_ko : p.location_en}</p>
            </div>
          </div>
        ))}

        {/* Empty slot for future additions */}
        <div className="rounded-2xl border-2 border-dashed border-[#2E9FC4]/15 aspect-[4/3] flex flex-col items-center justify-center gap-3 md:col-span-1">
          <span className="text-[36px] text-[#2E9FC4]/15 font-light">+</span>
          <span className="text-[14px] text-[#2E9FC4]/25 font-[var(--font-fredoka)]">
            {ko ? "더 많은 이야기가 올 예정이에요" : "More stories coming soon"}
          </span>
        </div>
      </div>
    </section>
  );
}
