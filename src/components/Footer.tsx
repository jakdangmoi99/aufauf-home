export default function Footer() {
  return (
    <footer className="px-[clamp(18px,4vw,48px)] py-10 bg-[#241E1A]">
      <div className="max-w-[1120px] mx-auto">
        {/* Navigation */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
          <a href="#home" className="text-[14px] text-white/70 hover:text-[#8FD3E8]">Home</a>
          <a href="#product" className="text-[14px] text-white/70 hover:text-[#8FD3E8]">Product</a>
          <a href="#company" className="text-[14px] text-white/70 hover:text-[#8FD3E8]">About AUF AUF</a>
          <a href="#contact" className="text-[14px] text-white/70 hover:text-[#8FD3E8]">What&apos;s More</a>
        </div>

        {/* Policy links */}
        <div className="flex gap-4 mb-6 text-[13px] text-white/40">
          <a href="#" className="hover:text-white/70">이용약관</a>
          <a href="#" className="font-bold hover:text-white/70">개인정보처리방침</a>
        </div>

        {/* Site name */}
        <div className="text-[14px] font-medium text-white/70 mb-3">
          어푸어푸 - 슬기로운 목욕생활
        </div>

        {/* Company info */}
        <div className="text-[11.5px] md:text-[12.5px] text-white/30 leading-[2]">
          <p className="flex flex-wrap gap-x-0">
            <span>상호명: (주)피앤엠인터내셔날</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>대표자: 차대범</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>사업장주소: 서울 성동구 아차산로17길 49 (성수동2가, 생각공장데시앙플렉스) 521호</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>연락처: 070-8064-8437</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>사업자등록번호: 372-86-02867</span>
          </p>
          <p className="flex flex-wrap gap-x-0">
            <span>통신판매업신고번호: 2024-서울성동-0914</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>대표자 이메일: back_sul@naver.com</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>호스팅 제공자: (주)아임웹</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
