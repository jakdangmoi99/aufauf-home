export default function FounderMessage({ ko }: { ko: boolean }) {
  return (
    <section className="bg-[#E7F1F4]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
          {/* Founder photo */}
          <div className="flex-shrink-0">
            <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden shadow-[0_12px_36px_rgba(46,159,196,.15)] border-4 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder.jpg"
                alt="Michelle Cha"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Message */}
          <div className="text-center md:text-left">
            <span className="font-[var(--font-fredoka)] text-[14px] font-semibold uppercase tracking-[.16em] text-[#2E9FC4] mb-4 block">
              Founder&apos;s Message
            </span>
            <h3 className="font-[var(--font-fredoka)] font-bold text-[clamp(22px,3.5vw,30px)] text-[#155874] mb-6">
              {ko ? (
                <>안녕하세요,<br/>어푸어푸입니다</>
              ) : (
                <>Hi, this is<br/>auf auf</>
              )}
            </h3>

            <blockquote className="font-[var(--font-cormorant)] italic text-[clamp(19px,2.5vw,23px)] leading-[1.7] text-[#241E1A]/75 mb-6">
              {ko
                ? "저는 auf auf(어푸어푸)를 통해 뷰티의 시작점을 욕실로 가져오고자 합니다. 욕실에서, 당신의 가장 좋은 순간이 시작되길 바랍니다"
                : "Through AUF AUF, I want to bring the starting point of beauty into the bathroom. I hope your best moments begin right there"}
            </blockquote>

            <p className="text-[17px] text-[#241E1A]/55 leading-[1.7] mb-8">
              {ko
                ? "매일 반복되는 샤워라는 일상 속에서, 나를 위한 작은 리추얼을 만들어가는 것. 그것이 어푸어푸가 믿는 뷰티의 시작입니다"
                : "Creating a small ritual just for you within the daily routine of showering — that is where AUF AUF believes beauty starts"}
            </p>

            <div>
              <p className="font-[var(--font-fredoka)] text-[18px] font-semibold text-[#155874]">Michelle Cha | 차여진</p>
              <p className="text-[15px] text-[#241E1A]/45 mt-1">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
