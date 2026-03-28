"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Adebayo",
    location: "Chatham",
    rating: 5,
    text: "Odogwu has been my go-to shop for over 5 years now. They always have fresh egusi, stockfish, and the best goat meat in Kent. The staff know me by name and even help me carry my shopping to the car!",
  },
  {
    name: "Pastor Thompson",
    location: "Rochester",
    rating: 5,
    text: "We order all our church event supplies from Odogwu — the wholesale prices are unbeatable and the quality is always top notch. They've catered for events of 50 to 200 people for us. Highly recommended!",
  },
  {
    name: "Chenelle Williams",
    location: "Gillingham",
    rating: 5,
    text: "Finally found a shop that stocks real Jamaican ackee and callaloo! The Caribbean section is amazing and they always have Malta Guinness. This is my happy place — feels like a slice of home.",
  },
];

export default function Testimonials() {
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
            Community Love
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1B4332] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Don't just take our word for it — hear from the families, churches,
            and individuals who trust us with their groceries.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E2D9] hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-[#D4A017]"
                    fill="#D4A017"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1C1C1C] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center text-[#D4A017] font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1C]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#6B7280]">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
