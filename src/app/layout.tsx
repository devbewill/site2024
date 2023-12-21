import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
      <body className="max-w-6xl mx-auto px-4">
        <main className="w-full lg:grid lg:grid-cols-10 mt-36">
          <header className="lg:self-start lg:sticky lg:col-span-3 lg:top-10">
            <Navbar></Navbar>
          </header>
          <div className="lg:col-start-5 lg:col-span-full">
            {children}
            <Footer></Footer>
          </div>
        </main>
      </body>
    </html>
  );
}
