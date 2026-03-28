import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/contact/WhatsAppButton";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us | Odogwu African Shop",
  description:
    "Get in touch with Odogwu African Shop. Call, email, or visit us at 23 Railway St, Chatham ME4 4HU. Home delivery within 2.5 miles.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80"
            alt="Inside Odogwu African Shop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1B4332]/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              className="text-5xl sm:text-6xl font-bold text-[#FAF7F0] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We&apos;re Here For You
            </h1>
            <p className="text-[#FAF7F0]/90 text-lg max-w-xl">
              Questions about products, delivery, or wholesale orders? Reach out
              and we&apos;ll get back to you promptly.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E2D9] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#1B4332]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1B4332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Phone
                </h3>
                <a
                  href="tel:+441622236105"
                  className="text-[#6B7280] hover:text-[#1B4332] transition-colors"
                >
                  +44 1622 236105
                </a>
                <p className="text-sm text-[#6B7280] mt-1">
                  Mon–Sat 9am–8pm
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E2D9] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#1B4332]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1B4332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:info@odogwuafricanshop.co.uk"
                  className="text-[#6B7280] hover:text-[#1B4332] transition-colors"
                >
                  info@odogwuafricanshop.co.uk
                </a>
                <p className="text-sm text-[#6B7280] mt-1">
                  We reply within 24 hours
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E2D9] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1B4332]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1B4332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Visit Us
                </h3>
                <p className="text-[#6B7280]">
                  23 Railway St, Chatham
                  <br />
                  ME4 4HU, United Kingdom
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E2D9] mb-16 max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#1B4332]" />
                <h3
                  className="text-lg font-bold text-[#1B4332]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Friday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-[#E5E2D9] last:border-0"
                  >
                    <span className="text-[#1C1C1C] font-medium">{day}</span>
                    <span
                      className={`text-sm ${
                        hours === "Closed"
                          ? "text-[#C0392B]"
                          : "text-[#6B7280]"
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B7280] mt-4">
                Pickup ends at 7:30pm daily
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2
                  className="text-3xl font-bold text-[#1B4332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-[#6B7280] mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>

              {/* Map */}
              <div>
                <h2
                  className="text-3xl font-bold text-[#1B4332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Find Us
                </h2>
                <p className="text-[#6B7280] mb-8">
                  Visit us in store at 23 Railway St, Chatham — just a short walk
                  from Chatham railway station.
                </p>
                <MapEmbed />

                {/* Delivery Info */}
                <div className="mt-8 p-6 bg-[#D4A017]/10 rounded-xl border border-[#D4A017]/20">
                  <h4 className="font-bold text-[#1B4332] mb-2">
                    Home Delivery Available
                  </h4>
                  <p className="text-sm text-[#6B7280]">
                    We deliver within 2.5 miles of our store. A minimum spend
                    applies — call us to confirm your area and minimum order
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
