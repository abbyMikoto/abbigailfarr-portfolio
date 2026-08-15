import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/cursor/custom-cursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Abbigail Farr | Software Engineer",
  description: "Portfolio of Abbigail Farr, Software Engineer.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} min-h-screen flex flex-col`}>
        {/* <CustomCursor /> */}
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}