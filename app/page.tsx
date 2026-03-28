import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/contact/WhatsAppButton";
import HeroSection from "./components/home/HeroSection";
import MarqueeBanner from "./components/home/MarqueeBanner";
import CategoryGrid from "./components/home/CategoryGrid";
import WhyChooseUs from "./components/home/WhyChooseUs";
import DeliveryBanner from "./components/home/DeliveryBanner";
import Testimonials from "./components/home/Testimonials";
import JsonLd from "./components/seo/JsonLd";

const BASE_URL = "https://www.odogwuafricanshop.co.uk";

export const metadata: Metadata = {
  title: "Odogwu African Shop | Authentic Afro-Caribbean Groceries in Chatham, Kent",
  description:
    "Your one-stop Afro-Caribbean shop in Chatham, Kent. Fresh meat, fish, African staples, Caribbean snacks, cosmetics and wholesale supplies. Home delivery within 2.5 miles. Open Mon-Sat until 8pm.",
  keywords: [
    "Afro-Caribbean shop Chatham",
    "African groceries Kent",
    "Caribbean food shop",
    "fresh goat meat UK",
    "garri semovita UK",
    "wholesale African food",
    "Chatham market",
    "home delivery Chatham",
    "african shop near me",
  ],
  openGraph: {
    title: "Odogwu African Shop | Authentic Afro-Caribbean Groceries",
    description:
      "Fresh meat, fish, African staples, Caribbean snacks & more. Retail & Wholesale. Home delivery within 2.5 miles of Chatham.",
    url: BASE_URL,
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Odogwu African Shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odogwu African Shop | Authentic Afro-Caribbean Groceries",
    description: "Fresh meat, fish, African staples, Caribbean snacks & more. Home delivery within 2.5 miles of Chatham.",
    site: "@odogwuafricanshop",
    creator: "@odogwuafricanshop",
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Odogwu African Shop",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  telephone: "+44-1622-236105",
  email: "info@odogwuafricanshop.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Railway St",
    addressLocality: "Chatham",
    addressRegion: "Kent",
    postalCode: "ME4 4HU",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.3837, longitude: 0.5269 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "20:00" },
  ],
  sameAs: ["https://www.facebook.com/odogwuafricanshop", "https://www.instagram.com/odogwuafricanshop"],
  priceRange: "£",
  servesCuisine: ["African", "Caribbean", "West African", "Nigerian", "Jamaican"],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Odogwu African Shop",
  image: `${BASE_URL}/og-image.jpg`,
  url: BASE_URL,
  telephone: "+44-1622-236105",
  email: "info@odogwuafricanshop.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Railway St",
    addressLocality: "Chatham",
    addressRegion: "Kent",
    postalCode: "ME4 4HU",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.3837, longitude: 0.5269 },
  openingHours: ["Mo-Sa 09:00-20:00"],
  priceRange: "£",
  servesCuisine: ["African", "Caribbean", "West African"],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.3837, longitude: 0.5269 },
    geoRadius: "4023",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd jsonLd={[orgJsonLd, localBusinessJsonLd]} />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <CategoryGrid />
        <WhyChooseUs />
        <DeliveryBanner />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
