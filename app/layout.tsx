import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const BASE_URL = "https://www.odogwuafricanshop.co.uk";

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Odogwu African Shop | Your Authentic Taste of Africa & the Caribbean",
    template: "%s | Odogwu African Shop",
  },
  description:
    "Odogwu African Shop in Chatham, UK offers authentic Afro-Caribbean groceries, fresh meat, fresh fish, snacks, cosmetics, and household items. Retail & Wholesale. Home delivery within 2.5 miles.",
  keywords: [
    "African shop Chatham",
    "Caribbean groceries UK",
    "Afro-Caribbean store",
    "African food Rochester",
    "wholesale African food",
    "home delivery Chatham Kent",
    "Garri",
    "Egusi",
    "Stockfish",
    "Goat meat",
    "Scotch bonnet",
    "Chatham grocery store",
    "African supermarket Kent",
  ],
  authors: [{ name: "Odogwu African Shop" }],
  creator: "Odogwu African Shop",
  publisher: "Odogwu African Shop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Odogwu African Shop",
    title: "Odogwu African Shop | Your Authentic Taste of Africa & the Caribbean",
    description:
      "One-stop shop for Afro-Caribbean groceries, fresh meat, fish, snacks & more. Retail & Wholesale. Home delivery within 2.5 miles of Chatham, Kent.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Odogwu African Shop - Afro-Caribbean groceries in Chatham, Kent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odogwu African Shop | Your Authentic Taste of Africa & the Caribbean",
    description:
      "Afro-Caribbean groceries, fresh meat, fish, snacks & more. Retail & Wholesale. Home delivery within 2.5 miles of Chatham.",
    site: "@odogwuafricanshop",
    creator: "@odogwuafricanshop",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  category: "Retail",
  classification: "Grocery Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geo Tags for Local Business */}
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="Chatham" />
        <meta name="geo.position" content="51.3837;0.5269" />
        <meta name="ICBM" content="51.3837, 0.5269" />

        {/* Business Info */}
        <meta name="business:contact_data:street_address" content="23 Railway St" />
        <meta name="business:contact_data:locality" content="Chatham" />
        <meta name="business:contact_data:postal_code" content="ME4 4HU" />
        <meta name="business:contact_data:country_name" content="United Kingdom" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
