export default function BrandVision({ ko }: { ko: boolean }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-4 block">
            Brand Vision
          </span>
          <h2 className="font-[var(--font-cormorant)] italic font-medium text-[clamp(28px,4vw,40px)] text-[#241E1A] leading-[1.3] mb-8">
            {ko ? (
              <>&ldquo;Cleansing is not the end.<br/>It&apos;s where beauty begins.&rdquo;</>
            ) : (
              <>&ldquo;Cleansing is not the end.<br/>It&apos;s where beauty begins.&rdquo;</>
            )}
          </h2>

          <p className="text-[17px] leading-[1.85] text-[#241E1A]/70 mb-8">
            {ko
              ? "어푸어푸는 wash-off 뷰티에 깊은 전문성을 가진 리추얼 브랜드입니다. 씻어내는 시간, 샤워라는 일상의 순간, 욕실이라는 가장 사적인 공간에서 — 뷰티의 시작점을 다시 정의합니다"
              : "AUF AUF is a ritual-driven brand with deep expertise in wash-off beauty. In the time spent washing, in the everyday moment of a shower, in the most private space of your bathroom — we redefine where beauty begins"}
          </p>

          <div className="space-y-5">
            <div className="border-l-[3px] border-[#2E9FC4] pl-5">
              <p className="font-[var(--font-fredoka)] text-[13px] uppercase tracking-[.12em] text-[#2E9FC4] mb-1">Vision</p>
              <p className="text-[17px] text-[#241E1A]/80 leading-[1.6]">
                {ko
                  ? "씻는 시간을 감정까지 정화하는 다정한 루틴으로 바꾸는 것"
                  : "Turning bath time into a kind ritual that cleanses even your emotions"}
              </p>
            </div>
            <div className="border-l-[3px] border-[#F6B12E] pl-5">
              <p className="font-[var(--font-fredoka)] text-[13px] uppercase tracking-[.12em] text-[#C87A1E] mb-1">Mission</p>
              <p className="text-[17px] text-[#241E1A]/80 leading-[1.6]">
                {ko
                  ? "귀찮던 클렌징을 기다려지는 시간으로"
                  : "Turning a chore into a moment you look forward to"}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(36,30,26,.1)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-bathtub.jpg"
              alt={ko ? "욕조" : "Bathtub"}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          {/* Floating quote card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl px-6 py-5 shadow-[0_12px_36px_rgba(36,30,26,.1)] max-w-[280px]">
            <p className="font-[var(--font-cormorant)] italic text-[18px] text-[#241E1A]/80 leading-[1.5]">
              {ko
                ? <>&ldquo;모든 뷰티는 잘 씻어내는 것에서 시작됩니다&rdquo;</>
                : <>&ldquo;All beauty begins with washing off well&rdquo;</>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
