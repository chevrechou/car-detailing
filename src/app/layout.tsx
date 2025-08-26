import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// app/layout.tsx
export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: "Pay Attention 2 Detail",
  description:
    "Professional. Fast. Reliable. Mobile car detailing in Dallas with clean interiors and glossy paint.",
  openGraph: {
    title: "Pay Attention 2 Detail",
    description:
      "Professional. Fast. Reliable. Mobile car detailing in Dallas.",
    url: "https://your-domain.com",
    siteName: "Pay Attention 2 Detail",
    images: [
      {
        url: "/thumbnail.jpg", 
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
