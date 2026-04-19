import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor/CustomCursor";
import { Navigation } from "@/components/Navigation/Navigation";
import { Preloader } from "@/components/Preloader/Preloader";
import "@/styles/globals.css";
import { Space_Grotesk, Orbitron } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subhrajit Saha — Full-Stack Developer & IoT Engineer",
  description:
    "Portfolio of Subhrajit Saha — full-stack developer specializing in React, Next.js, IoT, and embedded systems. Building innovative, high-performance web applications.",
  keywords: [
    "Subhrajit Saha",
    "Full-Stack Developer",
    "IoT Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Subhrajit Saha — Full-Stack Developer",
    description:
      "Full-stack developer building innovative solutions at the intersection of web and hardware.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${orbitron.variable}`}
    >
      <body suppressHydrationWarning>
        <Preloader />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
