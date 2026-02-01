"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen gradient-mesh overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />

      {/* Geometric accents */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-accent-500 rounded-full opacity-60 animate-pulse-soft" />
      <div className="absolute top-60 right-20 w-3 h-3 bg-primary-500 rounded-full opacity-40 animate-pulse-soft animate-delay-200" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent-500 rounded-full opacity-50 animate-pulse-soft animate-delay-400" />

      <div className="container-custom pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          ref={heroRef}
          className="stagger-children grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-body text-sm text-charcoal font-medium">
                Accepting New Patients
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Your Smile,{" "}
              <span className="relative">
                <span className="text-primary-500">Our Priority</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 3 150 3 198 8"
                    stroke="#D4A853"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl text-charcoal/70 mb-10 max-w-lg leading-relaxed">
              Experience exceptional dental care in a warm, welcoming environment.
              We&apos;re here to help you achieve the confident smile you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                <span>Book Your Visit</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline text-center"
              >
                View Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600
                               border-2 border-cream flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-medium">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-charcoal">2,500+</p>
                  <p className="font-body text-xs text-charcoal/60">Happy Patients</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-charcoal">4.9/5</p>
                  <p className="font-body text-xs text-charcoal/60">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            {/* Main image container with asymmetric positioning */}
            <div className="relative">
              {/* Background decorative card */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-full h-full bg-accent-500/20 rounded-3xl" />

              {/* Main image */}
              <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl overflow-hidden aspect-[4/5] shadow-soft-lg">
                {/* Placeholder for dental office image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Dental Office Image</p>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent" />
              </div>

              {/* Floating card - Years of experience */}
              <div className="absolute -left-4 md:-left-8 bottom-20 bg-white rounded-2xl shadow-soft-lg p-4 md:p-6 animate-bounce-gentle">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-charcoal">15+</p>
                    <p className="font-body text-sm text-charcoal/60">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Emergency */}
              <div className="absolute -right-2 md:-right-6 top-20 bg-white rounded-2xl shadow-soft-lg p-3 md:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-charcoal">Same-Day</p>
                    <p className="font-body text-xs text-charcoal/60">Emergency Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-charcoal/50">Scroll to explore</span>
        <svg className="w-6 h-6 text-charcoal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 1s ease-out forwards;
          animation-delay: 0.5s;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
        }
      `}</style>
    </section>
  );
}
