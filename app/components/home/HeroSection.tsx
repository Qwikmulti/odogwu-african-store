"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/product-1.jpeg"
          alt="Vibrant African market with colorful produce and spices"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/90 via-[#1B4332]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-2xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FAF7F0] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From Our Roots
            <br />
            <span className="text-[#D4A017]">to Your Table</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#FAF7F0]/90 mb-10 max-w-lg leading-relaxed"
          >
            Your one-stop shop for authentic Afro-Caribbean groceries, fresh
            meat, fish, snacks, and more. Retail &amp; wholesale available.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#1C1C1C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E8B82A] transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Browse Our Shop
            </Link>
            <a
              href="https://maps.google.com/?q=23+Railway+St+Chatham+ME4+4HU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF7F0]/10 backdrop-blur-sm border border-[#FAF7F0]/30 text-[#FAF7F0] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FAF7F0]/20 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-12 text-[#FAF7F0]/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              Fresh Daily
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              Home Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              Wholesale Available
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-[#FAF7F0]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
