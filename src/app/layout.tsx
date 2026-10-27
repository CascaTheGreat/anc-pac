import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "./_components/header";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Americans for Neighborhood Change`,
  description: `Building a better neighborhood for all.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#012169" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" href="https://use.typekit.net/qus5dmj.css" />
      </head>
      <body className={`${lora.className} bg-background text-text`}>
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-6S2JXNRMXL" />
    </html>
  );
}
