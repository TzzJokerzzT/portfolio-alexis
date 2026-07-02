import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./shared/provider/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Developer | Frontend Portfolio",
  description:
    "A phantom thief of the digital realm, stealing hearts through exceptional user experiences and elegant code. Frontend Developer portfolio inspired by Persona 5.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Phantom Developer" }],
  openGraph: {
    title: "Phantom Developer | Frontend Portfolio",
    description:
      "A phantom thief of the digital realm, stealing hearts through exceptional user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-p5-black`}
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
