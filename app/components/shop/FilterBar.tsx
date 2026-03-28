"use client";

import { motion } from "framer-motion";

export type Category = "all" | "meat-fish" | "staples" | "caribbean" | "snacks" | "cosmetics" | "wholesale";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "meat-fish", label: "Meat & Fish" },
  { id: "staples", label: "African Staples" },
  { id: "caribbean", label: "Caribbean" },
  { id: "snacks", label: "Snacks & Drinks" },
  { id: "cosmetics", label: "Cosmetics" },
  { id: "wholesale", label: "Wholesale" },
];

interface FilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-2 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === cat.id
                ? "bg-[#1B4332] text-[#FAF7F0]"
                : "bg-[#E5E2D9] text-[#1C1C1C] hover:bg-[#1B4332]/10"
            }`}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-[#1B4332] rounded-full -z-10"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
