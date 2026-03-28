"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, Tag, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Daily",
    description:
      "We receive fresh deliveries every morning, ensuring the highest quality meat, fish, and produce for our customers.",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description:
      "Convenient home delivery within 2.5 miles of our store. Call us to place your order and we'll bring the shop to your door.",
  },
  {
    icon: Tag,
    title: "Wholesale Pricing",
    description:
      "Competitive bulk prices available for caterers, restaurants, churches, and families. Save more when you buy more.",
  },
  {
    icon: Heart,
    title: "Community Trusted",
    description:
      "Serving the African and Caribbean diaspora in Chatham and surrounding areas for over a decade with authentic products.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1B4332]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A017] font-semibold tracking-wider uppercase text-sm">
            Why Odogwu
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#FAF7F0] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose Us
          </h2>
          <p className="text-[#FAF7F0]/70 max-w-2xl mx-auto">
            We're more than just a shop — we're a part of your community,
            committed to bringing you the authentic taste of home.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-[#1B4332]/50 border border-[#FAF7F0]/10 hover:border-[#D4A017]/40 transition-all group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#D4A017]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A017]/20 transition-colors">
                <feature.icon className="w-8 h-8 text-[#D4A017]" />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-[#FAF7F0] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#FAF7F0]/70 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#D4A017]/0 to-transparent group-hover:via-[#D4A017]/60 transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
