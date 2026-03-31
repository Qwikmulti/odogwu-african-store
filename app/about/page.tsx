import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/contact/WhatsAppButton";
import StorySection from "../components/about/StorySection";
import StatsBar from "../components/about/StatsBar";
import StoreGallery from "../components/about/StoreGallery";
import MissionValues from "../components/about/MissionValues";
import JsonLd from "../components/seo/JsonLd";

const BASE_URL = "https://www.odogwuafricanshop.co.uk";

export const metadata: Metadata = {
  title: "About Us | Our Story & Mission | Odogwu African Shop",
  description:
    "Learn about Odogwu African Shop — serving the African and Caribbean diaspora in Chatham, Kent since 2014. Our story, values, and commitment to authentic Afro-Caribbean groceries.",
  keywords: [
    "about odogwu african shop", "african shop chatham history",
    "afro-caribbean store kent", "community shop chatham",
    "african diaspora kent", "authentic african food shop",
    "wholesale african food chatham",
  ],
  openGraph: {
    title: "About Us | Odogwu African Shop",
    description: "Our story, mission and commitment to the Chatham community since 2014. Authentic Afro-Caribbean groceries, retail & wholesale.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Inside Odogwu African Shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Odogwu African Shop",
    description: "Serving the African & Caribbean community in Chatham since 2014. Authentic groceries, wholesale, home delivery.",
    site: "@odogwuafricanshop",
  },
  alternates: { canonical: `${BASE_URL}/about` },
  robots: { index: true, follow: true },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "Odogwu African Shop",
    description: "Authentic Afro-Caribbean grocery store serving Chatham, Kent since 2014",
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
    servesCuisine: ["African", "Caribbean", "West African", "Nigerian", "Jamaican"],
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Afro-Caribbean Grocery Products", numberOfItems: "500+" },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd jsonLd={[aboutJsonLd]} />
      <Navbar />
      <main>
        <section className="relative h-80 overflow-hidden">
          <Image
            src="/images/product-4.jpeg"
            alt="Vibrant African market scene at Odogwu African Shop"
            fill priority className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1B4332]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#FAF7F0] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              About Us
            </h1>
            <p className="text-[#FAF7F0]/90 text-lg max-w-xl">
              Our story, our values, and our commitment to the Chatham community since 2014.
            </p>
          </div>
        </section>

        <MissionValues />
        <StorySection />
        <StatsBar />
        <StoreGallery />

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#D4A017] font-semibold tracking-wider uppercase text-sm">Community</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B4332] mt-3 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Serving Chatham &amp; Beyond
            </h2>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
              Odogwu African Shop is proud to serve a diverse community across Chatham, Rochester, Gillingham, and the surrounding areas in Kent. From families preparing Sunday dinner to church groups planning community events, from caterers to restaurant owners — we are here for you.
            </p>
            <p className="text-[#6B7280] leading-relaxed text-lg">
              Over the years, we&apos;ve built lasting relationships with suppliers across West Africa and the Caribbean. When you shop at Odogwu, you&apos;re not just a customer — you&apos;re part of our family.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
