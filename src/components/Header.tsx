"use client";

import { useState } from "react";

interface HeaderProps {
  lang: "ko" | "en";
  setLang: (l: "ko" | "en") => void;
  ko: boolean;
  activePage?: "home" | "products";
}

export default function Header({ lang, setLang, ko, activePage = "home" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const langBtn = (active: boolean) =>
    `border-none cursor-pointer px-3 py-1.5 font-[var(--font-fredoka)] text-[13px] ${
      active
        ? "bg-[#241E1A] text-[#FAF5EC] font-semibold"
        : "bg-transparent text-[#241E1A]/55 font-medium"
    }`;

  const navLink = (page: string) =>
    activePage === page ? "text-[#2E9FC4]" : "";

  const homeBase = activePage === "products" ? "/" : "";
  const productsHref = activePage === "home" ? "/products" : "#";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[#FAF5EC]/82 border-b border-[#241E1A]/8">
      <div className="h-16 flex items-center justify-between px-[clamp(16px,4vw,44px)]">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/aufauf-logo.png" alt="auf auf" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex gap-[clamp(32px,4.5vw,60px)] text-[18px] font-extrabold">
          <a href="/" className={navLink("home")}>{ko ? "홈" : "Home"}</a>
          <a href={productsHref} className={navLink("products")}>{ko ? "제품" : "Products"}</a>
          <a href={`${homeBase}#company`}>{ko ? "어푸어푸란?" : "About AUF AUF"}</a>
          <a href={`${homeBase}#contact`}>{ko ? "문의하기" : "Contact"}</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-[#241E1A]/18 rounded-full overflow-hidden">
            <button onClick={() => setLang("ko")} className={langBtn(lang === "ko")}>KR</button>
            <button onClick={() => setLang("en")} className={langBtn(lang === "en")}>EN</button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-[#241E1A] transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#241E1A] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#241E1A] transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-5 text-[18px] font-extrabold bg-[#FAF5EC]/95 backdrop-blur-[12px] border-t border-[#241E1A]/8">
          <a href="/" onClick={() => setMenuOpen(false)} className={navLink("home")}>{ko ? "홈" : "Home"}</a>
          <a href={productsHref} onClick={() => setMenuOpen(false)} className={navLink("products")}>{ko ? "제품" : "Products"}</a>
          <a href={`${homeBase}#company`} onClick={() => setMenuOpen(false)}>{ko ? "어푸어푸란?" : "About AUF AUF"}</a>
          <a href={`${homeBase}#contact`} onClick={() => setMenuOpen(false)}>{ko ? "문의하기" : "Contact"}</a>
        </nav>
      )}
    </header>
  );
}
