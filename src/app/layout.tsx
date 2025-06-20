import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namaskar Yoga",
  description: "Discover the power of yoga with Namaskar Yoga. Learn traditional asanas, breathing techniques, and mindfulness practices to strengthen your body and calm your mind.",
  keywords: [
    "Namaskar Yoga",
    "Yoga",
    "Yoga for Beginners",
    "Mindfulness",
    "Meditation",
    "Wellness",
    "Pranayama",
    "Yoga Asanas",
    "Hatha Yoga",
    "Vinyasa Flow",
    "Core Yoga",
    "Yoga Poses",
    "Yoga Benefits",
    "Sanskrit Yoga",
    "Spiritual Healing"
  ],
  authors: [{ name: "Herin Patel", url: "https://portfolio-v2-0-liard.vercel.app/" }],
  creator: "Herin Patel",
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
        <div>
          <Navbar />
          {children}
        </div>
        
      </body>
    </html>
  );
}
