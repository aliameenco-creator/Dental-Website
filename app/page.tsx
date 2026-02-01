"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

// Services data
const services = [
  {
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar, keeping your teeth healthy and your smile bright.",
    price: "$120",
    href: "/services#cleaning",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    description: "Transform your smile with our professional whitening treatments. Visible results in just one visit.",
    price: "$299",
    href: "/services#whitening",
    featured: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Dental Implants",
    description: "Permanent solution for missing teeth. Natural-looking results that last a lifetime.",
    price: "$3,000",
    href: "/services#implants",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Emergency Care",
    description: "Dental emergencies can't wait. Same-day appointments available for urgent dental needs.",
    price: "Varies",
    href: "/services#emergency",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient for 5 years",
    content: "The team at Smile Dental made me feel comfortable from day one. I used to dread dental visits, but now I actually look forward to them!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Patient for 3 years",
    content: "Best dental experience I've ever had. Professional, friendly, and they always explain everything clearly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Patient for 2 years",
    content: "My teeth whitening results were amazing! The staff is wonderful and the office is beautiful. Five stars all around.",
    rating: 5,
  },
];

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    [servicesRef, whyUsRef, testimonialsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
              Comprehensive Dental Care
            </h2>
            <p className="font-body text-charcoal/60 text-lg">
              From routine checkups to advanced procedures, we provide a full range
              of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={servicesRef}
            className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body font-semibold text-primary-500 hover:text-primary-600 transition-colors group"
            >
              <span>View All Services</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-500 text-white relative overflow-hidden diagonal-top diagonal-bottom">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div ref={whyUsRef} className="stagger-children grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Your Comfort is Our Priority
              </h2>
              <p className="font-body text-white/80 text-lg mb-10 leading-relaxed">
                We believe everyone deserves a healthy, beautiful smile. Our team combines
                advanced technology with a gentle, caring approach to make your dental
                experience as comfortable as possible.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {[
                  {
                    title: "Modern Technology",
                    description: "State-of-the-art equipment for precise, comfortable treatments",
                  },
                  {
                    title: "Experienced Team",
                    description: "15+ years of expertise with continuing education",
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Evening and weekend appointments available",
                  },
                  {
                    title: "Insurance Friendly",
                    description: "We accept most major insurance plans",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-1">{feature.title}</h4>
                      <p className="font-body text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "2,500+", label: "Happy Patients" },
                { number: "98%", label: "Satisfaction Rate" },
                { number: "24/7", label: "Emergency Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-colors duration-300"
                >
                  <p className="font-display text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                    {stat.number}
                  </p>
                  <p className="font-body text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
              What Our Patients Say
            </h2>
            <p className="font-body text-charcoal/60 text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our patients have to say
              about their experience at Smile Dental Care.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div
            ref={testimonialsRef}
            className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover-lift"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-sm text-charcoal/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-mesh relative overflow-hidden">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready for Your Best Smile?
              </h2>
              <p className="font-body text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Schedule your appointment today and take the first step toward
                a healthier, more confident smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent-500 text-charcoal px-10 py-5 rounded-full font-body font-semibold
                           text-lg transition-all duration-300 hover:bg-accent-400 hover:shadow-lg
                           hover:-translate-y-1 active:scale-95"
                >
                  Book Your Appointment
                </Link>
                <a
                  href="tel:5551234567"
                  className="bg-white/10 text-white px-10 py-5 rounded-full font-body font-semibold
                           text-lg transition-all duration-300 hover:bg-white/20
                           flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
