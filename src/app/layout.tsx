import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  fallback: ["Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "sans-serif"],
});

export const metadata: Metadata = {
  title: "한다영 포트폴리오",
  description:
    "시각영상디자인 전공 한다영의 포트폴리오. 기획과 UX/UI로 메시지를 선명하게 전달합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${roboto.variable} h-full`} data-scroll-behavior="smooth">
      <body className={`${roboto.className} flex min-h-full flex-col bg-surface text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  );
}
