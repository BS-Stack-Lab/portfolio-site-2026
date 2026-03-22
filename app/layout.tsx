import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "beomseo portfolio site",
  description: "상상을 실체로 만드는 순간. 범서의 프로젝트를 만나보세요.",

  // 오픈 그래프
  openGraph: {
    title: "범서 | Portfolio Site",
    description: "상상을 실체로 만드는 순간, 범서의 프로젝트를 만나보세요.",
    url: "https://beomseo-portfolio.vercel.app", // 내 사이트 주소
    siteName: "범서 포트폴리오",
    images: [
      {
        url: "/asset/og-image-main.png", // public 폴더에 있는 이미지 경로
        width: 1200,
        height: 630,
        alt: "범서 포트폴리오 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
