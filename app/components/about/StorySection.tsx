/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/product-11.jpeg"
                alt="Inside Odogwu African Shop with shelves full of African products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4A017]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1B4332]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[#D4A017] font-semibold tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rooted in Community,
              <br />
              <span className="text-[#D4A017]">Driven by Trust</span>
            </h2>

            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                Odogwu African Shop was born from a simple belief: everyone
                deserves access to the authentic ingredients that remind them of
                home. Founded in 2014, we started as a small stall in Chatham
                Market, serving the growing African and Caribbean community in
                Kent.
              </p>
              <p>
                What began as a passion project has grown into a beloved local
                institution — a place where church groups come for wholesale
                orders, where families stock up on weekend jollof ingredients,
                and where first-generation immigrants find a taste of the home
                they left behind.
              </p>
              <p>
                Today, Odogwu remains true to its founding principles: authentic
                products, fair prices, and a genuine commitment to serving our
                community with warmth and respect. Every product on our shelves is
                hand-selected to ensure quality and authenticity.
              </p>
            </div>

            <blockquote className="border-l-4 border-[#D4A017] pl-6 py-2 italic text-[#1B4332] text-lg font-medium">
              "Odogwu" — a Igbo word for "great one" or "leader" — reflects our
              ambition to be the best at what we do.
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
