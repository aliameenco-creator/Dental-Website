"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              {/* Tooth icon */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M24 4C18 4 14 8 12 12C10 16 10 22 12 28C14 34 16 42 20 44C22 45 24 42 24 38C24 42 26 45 28 44C32 42 34 34 36 28C38 22 38 16 36 12C34 8 30 4 24 4Z"
                  fill="#0D4F4F"
                  className="transition-all duration-300"
                />
                <path
                  d="M20 16C20 14 22 12 24 12C26 12 28 14 28 16"
                  stroke="#D4A853"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-primary-500">
                Smile
              </span>
              <span className="font-display text-2xl font-light text-charcoal">
                {" "}Dental
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-charcoal font-medium hover:text-primary-500 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-accent-500 text-charcoal px-6 py-3 rounded-full font-body font-semibold
                       transition-all duration-300 hover:bg-accent-400 hover:shadow-lg hover:-translate-y-0.5
                       active:scale-95"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary-500"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? "rotate-45 translate-x-px" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 translate-x-4" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? "-rotate-45 translate-x-px" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-soft-lg p-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-charcoal font-medium hover:bg-primary-50 hover:text-primary-500
                         rounded-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-accent-500 text-charcoal px-6 py-4 rounded-full font-semibold
                       transition-all duration-300 hover:bg-accent-400 mt-4"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
