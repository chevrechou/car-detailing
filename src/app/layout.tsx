import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://car-detailing-rouge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pay Attention 2 Detail",
  description:
    "Professional. Fast. Reliable. Mobile car detailing in Dallas with clean interiors and glossy paint.",
  openGraph: {
    title: "Pay Attention 2 Detail",
    description:
      "Professional. Fast. Reliable. Mobile car detailing in Dallas.",
    url: siteUrl,
    siteName: "Pay Attention 2 Detail",
    images: [
      {
        url: "/thumbnail.jpg", // should be in /public folder
        width: 1200,
        height: 630,
        alt: "Pay Attention 2 Detail logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Attention 2 Detail",
    description:
      "Professional. Fast. Reliable. Mobile car detailing in Dallas.",
    images: ["/thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
