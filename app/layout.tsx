import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/modules/Header";
import Footer from "@/modules/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const workSansMono = Work_Sans({
  variable: "--font-work-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Maketplace",
  description: "NFT Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${workSans.variable} ${workSansMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
