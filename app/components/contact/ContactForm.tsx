"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1B4332]/5 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#1B4332]" />
        </div>
        <h3
          className="text-2xl font-bold text-[#1B4332] mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Message Sent!
        </h3>
        <p className="text-[#6B7280]">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#1B4332] font-semibold hover:text-[#D4A017] transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#1C1C1C] mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E2D9] bg-white focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all outline-none"
          placeholder="e.g. Abena Mensah"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#1C1C1C] mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E2D9] bg-white focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all outline-none"
          placeholder="e.g. abena@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[#1C1C1C] mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E2D9] bg-white focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all outline-none"
          placeholder="e.g. 07700 900123"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[#1C1C1C] mb-2"
        >
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formState.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E2D9] bg-white focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
        >
          <option value="">Select a subject</option>
          <option value="general">General Enquiry</option>
          <option value="wholesale">Wholesale Order</option>
          <option value="delivery">Delivery Enquiry</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#1C1C1C] mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E2D9] bg-white focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-all outline-none resize-none"
          placeholder="How can we help you today?"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#1B4332] text-[#FAF7F0] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#14332A] transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}
