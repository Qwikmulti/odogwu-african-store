"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Products in Stock" },
  { value: "2.5", label: "Mile Delivery Radius" },
  { value: "7", label: "Days a Week Open" },
  { value: "10+", label: "Years Serving Chatham" },
];

export default function StatsBar() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#D4A017]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B4332] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </p>
              <p className="text-[#1B4332]/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
