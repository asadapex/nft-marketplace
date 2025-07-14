import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Layout from "@/provider";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="h-full">
      <body
        className={`${workSans.variable} ${workSansMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider>
          <main className="flex-grow">
            <Layout>{children}</Layout>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
