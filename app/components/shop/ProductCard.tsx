"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryId: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  "meat-fish": "bg-[#C0392B]/10 text-[#C0392B]",
  staples: "bg-[#D4A017]/10 text-[#D4A017]",
  caribbean: "bg-[#1B4332]/10 text-[#1B4332]",
  snacks: "bg-[#E8B82A]/10 text-[#B8860B]",
  cosmetics: "bg-[#8B4513]/10 text-[#8B4513]",
  wholesale: "bg-[#1C1C1C]/10 text-[#1C1C1C]",
};

const categoryLabels: Record<string, string> = {
  "meat-fish": "Meat & Fish",
  staples: "African Staples",
  caribbean: "Caribbean",
  snacks: "Snacks & Drinks",
  cosmetics: "Cosmetics",
  wholesale: "Wholesale",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E2D9] hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              categoryColors[product.categoryId] || "bg-[#1B4332]/10 text-[#1B4332]"
            }`}
          >
            {categoryLabels[product.categoryId] || product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-[#1C1C1C] mb-2 group-hover:text-[#1B4332] transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
          {product.description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#1B4332] font-semibold text-sm hover:text-[#D4A017] transition-colors"
        >
          Enquire
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
