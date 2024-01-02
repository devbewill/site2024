import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const metadata = {
  title: "stefanoperelli.com",
  description: "my little space on web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="max-w-6xl mx-auto px-4">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
