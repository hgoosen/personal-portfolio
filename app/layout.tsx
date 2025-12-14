import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'
const lemonMilk = localFont({
  src: './fonts/LEMONMILK-Regular.otf',
  display: 'swap',
  variable: '--font-lemon',
})

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets:['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Henri Goosen's Portfolio",
  description: "Showcase of projects developed by Henri Goosen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lemonMilk.variable} antialiased`}
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
