import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike - Hyper Adapt",
  description: "HyperAdapt 1.0 for Nike",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} h-screen bg-no-repeat bg-right bg-cover overflow-y-hidden overflow-x-hidden bg-custom-bg bg-black text-white `}>
        <div className="px-24 py-9 z-[999] relative">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
