"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80",
    alt: "African shop interior with colourful product shelves",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    alt: "Vibrant African market with fresh produce",
  },
  {
    src: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=600&q=80",
    alt: "African staples and grains display",
  },
  {
    src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    alt: "Fresh plantains and tropical produce at market",
  },
];

export default function StoreGallery() {
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
            Gallery
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1B4332] mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Come See For Yourself
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl ${
                i === 1 || i === 3 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="relative h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Invitation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#1B4332] rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#FAF7F0] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Come Meet Us In Store
          </h3>
          <p className="text-[#FAF7F0]/80 max-w-2xl mx-auto mb-6">
            There's nothing quite like seeing and touching the products yourself.
            Visit us at 23 Railway St, Chatham — we'd love to welcome you and help
            you find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=23+Railway+St+Chatham+ME4+4HU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#1C1C1C] px-6 py-3 rounded-full font-bold hover:bg-[#E8B82A] transition-all"
            >
              Get Directions
            </a>
            <a
              href="tel:+441622236105"
              className="inline-flex items-center justify-center gap-2 bg-[#FAF7F0]/10 border border-[#FAF7F0]/30 text-[#FAF7F0] px-6 py-3 rounded-full font-bold hover:bg-[#FAF7F0]/20 transition-all"
            >
              Call +44 1622 236105
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
