import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#FAF7F0]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <circle cx="20" cy="20" r="18" fill="#D4A017" />
                <path
                  d="M20 8c0 0-8 6-8 14s8 10 8 10 8-2 8-10S20 8 20 8z"
                  fill="#1B4332"
                />
                <path
                  d="M20 12c0 0-4 4-4 9s4 6 4 6 4-1 4-6-4-9-4-9z"
                  fill="#D4A017"
                />
              </svg>
              <span
                className="text-2xl font-bold text-[#D4A017]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Odogwu
              </span>
            </div>
            <p
              className="text-[#FAF7F0]/80 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Your Authentic Taste of Africa &amp; the Caribbean. Serving the
              community in Chatham, Kent with quality Afro-Caribbean groceries
              since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4 text-[#D4A017]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FAF7F0]/80 hover:text-[#D4A017] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-semibold mb-4 text-[#D4A017]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                <span className="text-[#FAF7F0]/80 text-sm">
                  23 Railway St, Chatham
                  <br />
                  ME4 4HU, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A017] shrink-0" />
                <a
                  href="tel:+441622236105"
                  className="text-[#FAF7F0]/80 hover:text-[#D4A017] transition-colors text-sm"
                >
                  +44 1622 236105
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A017] shrink-0" />
                <a
                  href="mailto:info@odogwuafricanshop.co.uk"
                  className="text-[#FAF7F0]/80 hover:text-[#D4A017] transition-colors text-sm"
                >
                  info@odogwuafricanshop.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              className="text-lg font-semibold mb-4 text-[#D4A017]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D4A017] shrink-0" />
                <span className="text-[#FAF7F0]/80">Mon - Sat: 9am - 8pm</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5" />
                <span className="text-[#FAF7F0]/80">
                  Pickup ends 7:30pm
                </span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <div className="w-5 h-5 rounded-full bg-[#D4A017] flex items-center justify-center">
                  <span className="text-[#1B4332] text-xs font-bold">!</span>
                </div>
                <span className="text-[#FAF7F0]/80 text-xs">
                  Sunday: Closed
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#FAF7F0]/30 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAF7F0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#FAF7F0]/60">
              &copy; 2026 Odogwu African Shop. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-[#FAF7F0]/60">
              <span>Retail &amp; Wholesale</span>
              <span className="w-1 h-1 rounded-full bg-[#D4A017]" />
              <span>Home Delivery</span>
              <span className="w-1 h-1 rounded-full bg-[#D4A017]" />
              <span>Chatham, Kent</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
