"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fish, Drumstick, Package, Candy, Sparkles, Boxes } from "lucide-react";

const categories = [
  {
    title: "Fresh Meat & Fish",
    description: "Premium goat meat, oxtail, mackerel, sardines & stockfish",
    icon: Drumstick,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80",
    href: "/shop",
  },
  {
    title: "African Staples",
    description: "Garri, semovita, plantain, yam flour, egusi & more",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1518977676601-b28b5e4dd746?w=600&q=80",
    href: "/shop",
  },
  {
    title: "Caribbean Groceries",
    description: "Scotch bonnet, ackee, callaloo, grace products & jerk seasoning",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80",
    href: "/shop",
  },
  {
    title: "Snacks & Drinks",
    description: "Chin-chin, puff-puff, malt drinks, Malta Guinness & zobo",
    icon: Candy,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    href: "/shop",
  },
  {
    title: "Afro Cosmetics",
    description: "Black soap, shea butter, cantu products & hair oils",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    href: "/shop",
  },
  {
    title: "Wholesale Supplies",
    description: "Bulk rice, palm oil, semolina & catering sizes",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    href: "/shop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CategoryGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A017] font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1B4332] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Our Categories
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            From fresh meat and fish to authentic African staples and Caribbean
            favourites, we stock everything you need to create delicious meals
            from home.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link
                href={category.href}
                className="group relative h-80 rounded-2xl overflow-hidden block"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-[#D4A017]/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[#D4A017] transition-colors">
                    <category.icon className="w-6 h-6 text-[#D4A017] group-hover:text-[#1C1C1C] transition-colors" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#FAF7F0] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-[#FAF7F0]/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
