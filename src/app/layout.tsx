import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pay Attention 2 Detail",
  description: "Premium mobile and in-shop car detailing",
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
