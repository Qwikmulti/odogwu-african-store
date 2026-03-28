"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Authenticity",
    text: "Every product we stock is sourced with intention — we prioritise genuine African and Caribbean brands and ingredients that our customers trust.",
    emoji: "🌍",
  },
  {
    title: "Community",
    text: "We're more than a shop. We're a gathering place for the African and Caribbean diaspora in Chatham, Kent — a space where culture is celebrated and preserved.",
    emoji: "🤝",
  },
  {
    title: "Freshness",
    text: "From morning stockfish deliveries to daily fresh meat, we ensure every item on our shelves meets the highest standards of quality and freshness.",
    emoji: "✨",
  },
];

export default function MissionValues() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center p-8 rounded-2xl bg-[#FAF7F0] border border-[#E5E2D9]"
            >
              <div className="text-4xl mb-4">{value.emoji}</div>
              <h3
                className="text-xl font-bold text-[#1B4332] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {value.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
