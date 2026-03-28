import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/contact/WhatsAppButton";
import ProductGrid from "../components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop | Odogwu African Shop",
  description:
    "Browse our full range of Afro-Caribbean groceries — fresh meat, fish, African staples, Caribbean ingredients, snacks, cosmetics, and wholesale supplies.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80"
            alt="African grocery shop interior with colourful shelves"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1B4332]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              className="text-5xl sm:text-6xl font-bold text-[#FAF7F0] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Explore Our Store
            </h1>
            <p className="text-[#FAF7F0]/90 text-lg max-w-xl">
              Over 30 authentic Afro-Caribbean products, from fresh meats and
              fish to wholesale staples.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto">
            <ProductGrid />
          </div>
        </section>

        {/* Wholesale CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1B4332]">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#FAF7F0] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Need Bulk Orders?
            </h2>
            <p className="text-[#FAF7F0]/80 text-lg mb-8 max-w-2xl mx-auto">
              We offer competitive wholesale pricing for caterers, restaurants,
              church groups, and families. Contact us to discuss your bulk
              requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-[#1C1C1C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8B82A] transition-all"
            >
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
