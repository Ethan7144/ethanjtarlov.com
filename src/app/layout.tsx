import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Tarlov",
  description: "Personal site of Ethan Tarlov",
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
        <nav className="flex gap-6 p-4 border-b text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/exp" className="hover:underline">Experience</Link>
          <Link href="/contact-me" className="hover:underline">Contact</Link>
          <Link href="/socials" className="hover:underline">Socials</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
