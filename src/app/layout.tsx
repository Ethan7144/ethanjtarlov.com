import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
          <a href="/" className="hover:underline">Home</a>
          <a href="/Experience" className="hover:underline">Experience</a>
          <a href="/Contact" className="hover:underline">Contact</a>
          <a href="/Socials" className="hover:underline">Socials</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
