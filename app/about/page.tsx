import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/contact/WhatsAppButton";
import StorySection from "../components/about/StorySection";
import StatsBar from "../components/about/StatsBar";
import StoreGallery from "../components/about/StoreGallery";
import MissionValues from "../components/about/MissionValues";

export const metadata: Metadata = {
  title: "About Us | Odogwu African Shop",
  description:
    "Learn about Odogwu African Shop — our story, mission, and commitment to serving the African and Caribbean community in Chatham, Kent with authentic groceries since 2014.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="Vibrant African market scene"
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
              About Us
            </h1>
            <p className="text-[#FAF7F0]/90 text-lg max-w-xl">
              Our story, our values, and our commitment to the Chatham community
              since 2014.
            </p>
          </div>
        </section>

        <MissionValues />
        <StorySection />
        <StatsBar />
        <StoreGallery />

        {/* Community Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#D4A017] font-semibold tracking-wider uppercase text-sm">
              Community
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1B4332] mt-3 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Serving Chatham &amp; Beyond
            </h2>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
              Odogwu African Shop is proud to serve a diverse community across
              Chatham, Rochester, Gillingham, and the surrounding areas in Kent.
              From individual families preparing Sunday dinner to church groups
              planning community events, from local caterers to restaurant owners
              seeking authentic ingredients — we are here for you.
            </p>
            <p className="text-[#6B7280] leading-relaxed text-lg">
              Over the years, we&apos;ve built lasting relationships with suppliers
              across West Africa and the Caribbean, ensuring our shelves are
              always stocked with the products our community needs and loves.
              When you shop at Odogwu, you&apos;re not just a customer — you&apos;re part
              of our family.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
