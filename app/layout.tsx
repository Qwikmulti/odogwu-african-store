import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odogwu African Shop | Your Authentic Taste of Africa & the Caribbean",
  description:
    "Odogwu African Shop in Chatham, UK offers authentic Afro-Caribbean groceries, fresh meat, fresh fish, snacks, cosmetics, and household items. Retail & Wholesale available with home delivery within 2.5 miles.",
  keywords: [
    "African shop Chatham",
    "Caribbean groceries UK",
    "Afro-Caribbean store",
    "African food Rochester",
    "wholesale African food",
    "home delivery Chatham",
  ],
  openGraph: {
    title: "Odogwu African Shop | Your Authentic Taste of Africa & the Caribbean",
    description:
      "One-Stop Shop for Afro-Caribbean groceries, fresh meat, fish, snacks & more. Retail & Wholesale. Home Delivery within 2.5 miles.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
