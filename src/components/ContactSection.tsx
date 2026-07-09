"use client";

import { useState, type FormEvent } from "react";

interface ContactSectionProps {
  ko: boolean;
}

export default function ContactSection({ ko }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = ko
    ? ["구매 문의", "제작 의뢰", "협업 문의"]
    : ["Purchase", "Manufacturing", "Partnership"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 px-[clamp(18px,4vw,48px)] py-[86px]"
    >
      <div className="max-w-[940px] mx-auto">
        <div className="text-center">
          <h2 className="font-[var(--font-fredoka)] font-semibold text-[clamp(34px,6vw,66px)] tracking-tight mb-3.5">
            {ko ? "함께 씻어볼까요?" : "Let's make a splash"}
          </h2>
          <p className="text-base text-[#241E1A]/65 mb-9">
            {ko
              ? "입점 문의, 협업, 구매처 — 편하게 연락 주세요."
              : "Wholesale, partnerships, where to buy — say hi."}
          </p>
        </div>

        <div className="max-w-[640px] mx-auto">
          {/* Form */}
          {submitted ? (
            <div className="bg-[#DCF1F7] rounded-3xl p-[54px_30px] text-center min-h-[360px] flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#2E9FC4] text-white flex items-center justify-center text-3xl">
                ✓
              </div>
              <div className="font-[var(--font-fredoka)] font-semibold text-2xl text-[#155874]">
                {ko ? "메시지가 전송되었어요!" : "Message sent!"}
              </div>
              <div className="text-[15px] text-[#155874]/80 max-w-[340px] leading-[1.6]">
                {ko
                  ? "빠른 시일 내에 답변드릴게요. 어푸어푸와 함께해 주셔서 감사합니다."
                  : "We'll get back to you shortly. Thanks for reaching out to auf auf."}
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-[22px] py-[11px] rounded-full border-[1.5px] border-[#2E9FC4] bg-transparent text-[#155874] font-[var(--font-fredoka)] font-medium text-sm cursor-pointer"
              >
                {ko ? "다시 작성하기" : "Send another"}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-[#241E1A]/10 rounded-3xl p-[clamp(22px,3vw,34px)] shadow-[0_18px_44px_rgba(36,30,26,.05)]"
            >
              {/* Inquiry type */}
              <div className="mb-[18px]">
                <span className="block text-[15px] font-medium text-[#241E1A]/70 mb-2.5">
                  {ko ? "문의 유형" : "Inquiry type"}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {inquiryTypes.map((t) => (
                    <label
                      key={t}
                      className="inline-flex items-center gap-2 px-[15px] py-2.5 rounded-full border-[1.5px] border-[#241E1A]/16 bg-[#FAF7F1] cursor-pointer text-[13.5px] text-[#241E1A]/85"
                    >
                      <input
                        type="checkbox"
                        name="inquiryType"
                        value={t}
                        className="w-4 h-4 accent-[#2E9FC4] cursor-pointer"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-medium text-[#241E1A]/70">
                    {ko ? "이름" : "Name"}
                  </span>
                  <input
                    name="name"
                    required
                    placeholder={ko ? "성함을 입력해 주세요" : "Your name"}
                    className="px-3.5 py-3 rounded-xl border-[1.5px] border-[#241E1A]/16 text-[14.5px] bg-[#FAF7F1] focus:border-[#2E9FC4] focus:outline-none focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-medium text-[#241E1A]/70">
                    {ko ? "이메일" : "Email"}
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="px-3.5 py-3 rounded-xl border-[1.5px] border-[#241E1A]/16 text-[14.5px] bg-[#FAF7F1] focus:border-[#2E9FC4] focus:outline-none focus:bg-white"
                  />
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-1.5 mt-4">
                <span className="text-[15px] font-medium text-[#241E1A]/70">
                  {ko ? "제목" : "Subject"}
                </span>
                <input
                  name="subject"
                  required
                  placeholder={ko ? "문의 제목" : "What is it about?"}
                  className="px-3.5 py-3 rounded-xl border-[1.5px] border-[#241E1A]/16 text-[14.5px] bg-[#FAF7F1] focus:border-[#2E9FC4] focus:outline-none focus:bg-white"
                />
              </label>

              {/* Message */}
              <label className="flex flex-col gap-1.5 mt-4">
                <span className="text-[15px] font-medium text-[#241E1A]/70">
                  {ko ? "내용" : "Message"}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={
                    ko
                      ? "내용을 자유롭게 적어주세요"
                      : "Tell us more…"
                  }
                  className="px-3.5 py-3 rounded-xl border-[1.5px] border-[#241E1A]/16 text-[14.5px] bg-[#FAF7F1] resize-none focus:border-[#2E9FC4] focus:outline-none focus:bg-white"
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 w-full py-[14px] rounded-full bg-[#241E1A] text-[#FAF5EC] font-[var(--font-fredoka)] font-semibold text-[15px] cursor-pointer hover:bg-[#3a3430] transition-colors"
              >
                {ko ? "보내기" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
