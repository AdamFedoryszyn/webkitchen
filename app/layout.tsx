import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "Web Kitchen",
  description: "Build your own Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`antialiase`}>
          <Header />
        {children}
      </body>
    </html>
  );
}
