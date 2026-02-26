
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Calling from "@/components/Calling/Calling";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { title } from "process";
import Footer from "@/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>


        {children}
        <div className="down">
          <Calling></Calling>
          <Footer />
        </div>


        <SpeedInsights />
      </body>
    </html>
  );
}