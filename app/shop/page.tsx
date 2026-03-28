import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/contact/WhatsAppButton";
import ProductGrid from "../components/shop/ProductGrid";
import JsonLd from "../components/seo/JsonLd";

const BASE_URL = "https://www.odogwuafricanshop.co.uk";

export const metadata: Metadata = {
  title: "Shop | Afro-Caribbean Groceries | Odogwu African Shop",
  description:
    "Browse 30+ authentic Afro-Caribbean products — fresh goat meat, stockfish, garri, semovita, scotch bonnet, chin-chin, shea butter and more. Retail & wholesale. Order by phone.",
  keywords: [
    "buy garri UK", "buy stockfish UK", "african groceries online shop",
    "afro-caribbean products UK", "wholesale african food",
    "fresh goat meat chatham", "nigerian food shop UK", "jamaican food shop UK",
    "african cosmetics UK",
  ],
  openGraph: {
    title: "Shop | Afro-Caribbean Groceries | Odogwu African Shop",
    description: "Browse 30+ authentic Afro-Caribbean products. Fresh meat, fish, African staples, Caribbean snacks, cosmetics. Retail & wholesale.",
    url: `${BASE_URL}/shop`,
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Odogwu Shop Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Afro-Caribbean Groceries | Odogwu African Shop",
    description: "30+ authentic Afro-Caribbean products. Fresh meat, fish, staples, snacks, cosmetics. Retail & Wholesale.",
    site: "@odogwuafricanshop",
  },
  alternates: { canonical: `${BASE_URL}/shop` },
  robots: { index: true, follow: true },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Afro-Caribbean Grocery Products at Odogwu African Shop",
  description: "Authentic African and Caribbean food products — goat meat, garri, stockfish, scotch bonnet, chin-chin, shea butter and more.",
  itemListElement: [
    { "@type": "Product", name: "Fresh Goat Meat", position: 1 },
    { "@type": "Product", name: "Beef Oxtail", position: 2 },
    { "@type": "Product", name: "Titus Sardines", position: 3 },
    { "@type": "Product", name: "Smoked Mackerel", position: 4 },
    { "@type": "Product", name: "Stockfish", position: 5 },
    { "@type": "Product", name: "Cow Feet (Ponmo)", position: 6 },
    { "@type": "Product", name: "Garri White", position: 7 },
    { "@type": "Product", name: "Garri Yellow", position: 8 },
    { "@type": "Product", name: "Semovita", position: 9 },
    { "@type": "Product", name: "Egusi Melon Seeds", position: 10 },
    { "@type": "Product", name: "Scotch Bonnet Peppers", position: 11 },
    { "@type": "Product", name: "Grace Coconut Milk", position: 12 },
    { "@type": "Product", name: "Ackee & Saltfish", position: 13 },
    { "@type": "Product", name: "Chin Chin", position: 14 },
    { "@type": "Product", name: "Malta Guinness", position: 15 },
    { "@type": "Product", name: "African Black Soap", position: 16 },
    { "@type": "Product", name: "Raw Shea Butter", position: 17 },
    { "@type": "Product", name: "Bulk Rice 25kg", position: 18 },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Shop", item: `${BASE_URL}/shop` },
  ],
};

export default function ShopPage() {
  return (
    <>
      <JsonLd jsonLd={[productJsonLd, breadcrumbJsonLd]} />
      <Navbar />
      <main>
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=1920&q=80"
            alt="Odogwu African Shop product shelves full of afro-caribbean groceries"
            fill priority className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1B4332]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#FAF7F0] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Explore Our Store
            </h1>
            <p className="text-[#FAF7F0]/90 text-lg max-w-xl">
              Over 30 authentic Afro-Caribbean products, from fresh meats and fish to wholesale staples.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto">
            <ProductGrid />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1B4332]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FAF7F0] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Need Bulk Orders?
            </h2>
            <p className="text-[#FAF7F0]/80 text-lg mb-8 max-w-2xl mx-auto">
              Competitive wholesale pricing for caterers, restaurants, church groups, and families.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#D4A017] text-[#1C1C1C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8B82A] transition-all">
              Contact Us for Wholesale
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
