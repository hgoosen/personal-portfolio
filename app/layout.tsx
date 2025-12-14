import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
