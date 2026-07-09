import type { Metadata } from "next";
import { Fredoka, Noto_Sans_KR, Cormorant_Garamond, Permanent_Marker } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "auf auf — Bathtime Playlist",
  description:
    "씻는 시간을 감정까지 정화하는 다정한 루틴으로. 어푸어푸가 당신의 욕실 플레이리스트를 큐레이션합니다.",
  openGraph: {
    title: "auf auf — Bathtime Playlist",
    description:
      "씻는 시간을 감정까지 정화하는 다정한 루틴으로. 어푸어푸가 당신의 욕실 플레이리스트를 큐레이션합니다.",
    images: [{ url: "/images/og-thumbnail.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "auf auf — Bathtime Playlist",
    images: ["/images/og-thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${fredoka.variable} ${notoSansKR.variable} ${cormorant.variable} ${marker.variable}`}
    >
      <body className="font-[var(--font-noto)]">{children}</body>
    </html>
  );
}
