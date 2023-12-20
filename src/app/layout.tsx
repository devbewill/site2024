import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const inter = Inter({
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "stefanoperelli.com",
  description: "my little space on web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="max-w-5xl mx-auto py-20 px-4 ">{children}</body>
    </html>
  );
}
