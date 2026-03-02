// "use client";

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Pilih berat font yang Anda butuhkan
  variable: "--font-ubuntu", // Kita simpan di CSS Variable
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portofolio - Muhammad Fadli Purnama",
    default: "Portofolio - Muhammad Fadli Purnama",
  },
  description: "Web Portofolio Muhammad Fadli Purnama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${ubuntu.className} ${geistMono.variable} antialiased bg-main-bg text-main-text `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
