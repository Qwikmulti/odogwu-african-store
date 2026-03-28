"use client";

import { motion } from "framer-motion";
import { Fish, Drumstick, Package, Candy, Sparkles, Truck } from "lucide-react";

const items = [
  { icon: Fish, text: "Fresh Fish" },
  { icon: Drumstick, text: "Meat" },
  { icon: Package, text: "African Groceries" },
  { icon: Candy, text: "Caribbean Snacks" },
  { icon: Sparkles, text: "Afro Cosmetics" },
  { icon: Truck, text: "Wholesale Available" },
  { icon: Package, text: "Home Delivery" },
  { icon: Drumstick, text: "Open Until 8PM" },
];

export default function MarqueeBanner() {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-[#1B4332] py-4 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[#FAF7F0] text-sm font-medium"
          >
            <item.icon className="w-4 h-4 text-[#D4A017]" />
            {item.text}
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]/50 ml-4" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
