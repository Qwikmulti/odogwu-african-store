"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function DeliveryBanner() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#D4A017] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#1B4332" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4332] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We Deliver Within 2.5 Miles
        </h2>
        <p className="text-[#1B4332]/80 text-lg mb-8 max-w-2xl mx-auto">
          Your favourite Afro-Caribbean groceries delivered right to your door.
          Minimum spend applies — call us to confirm your area and order
          requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+441622236105"
            className="inline-flex items-center justify-center gap-3 bg-[#1B4332] text-[#FAF7F0] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#14332A] transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call +44 1622 236105
          </a>
          <a
            href="https://maps.google.com/?q=23+Railway+St+Chatham+ME4+4HU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#FAF7F0] text-[#1B4332] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all"
          >
            <MapPin className="w-5 h-5" />
            Find Us
          </a>
        </div>

        <p className="text-[#1B4332]/60 text-sm mt-6">
          Pickup available until 7:30pm • Orders placed after hours will be
          fulfilled the next business day
        </p>
      </motion.div>
    </section>
  );
}
