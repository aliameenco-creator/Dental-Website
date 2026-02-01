"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    subtitle: "Preventive Care",
    description: "Professional teeth cleaning is the foundation of good oral health. Our hygienists use advanced techniques to remove plaque and tartar buildup, polish your teeth, and help prevent gum disease.",
    features: [
      "Thorough plaque and tartar removal",
      "Professional polishing",
      "Fluoride treatment",
      "Oral cancer screening",
      "Personalized hygiene tips",
    ],
    price: "$120 - $180",
    duration: "45-60 minutes",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    subtitle: "Cosmetic Enhancement",
    description: "Transform your smile with our professional whitening treatments. We offer both in-office and take-home options to fit your lifestyle and achieve the bright, confident smile you deserve.",
    features: [
      "Dramatic results in one visit",
      "Safe, professional-grade products",
      "Customized treatment plans",
      "Take-home maintenance kits",
      "Long-lasting results",
    ],
    price: "$299 - $499",
    duration: "60-90 minutes",
    featured: true,
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "implants",
    title: "Dental Implants",
    subtitle: "Tooth Replacement",
    description: "Dental implants are the gold standard for replacing missing teeth. These permanent solutions look, feel, and function like natural teeth, restoring your smile and your confidence.",
    features: [
      "Permanent tooth replacement",
      "Natural look and feel",
      "Preserves jawbone health",
      "No damage to adjacent teeth",
      "Lifetime durability with care",
    ],
    price: "$3,000 - $5,000",
    duration: "Multiple visits",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "Emergency Care",
    subtitle: "Urgent Treatment",
    description: "Dental emergencies don't wait, and neither should you. We offer same-day emergency appointments to address urgent issues like severe tooth pain, broken teeth, or dental trauma.",
    features: [
      "Same-day appointments",
      "Pain management priority",
      "Trauma treatment",
      "After-hours availability",
      "Quick diagnosis & treatment",
    ],
    price: "Varies by treatment",
    duration: "As needed",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "checkup",
    title: "Dental Checkups",
    subtitle: "Routine Examination",
    description: "Regular dental checkups are essential for maintaining optimal oral health. We'll examine your teeth, gums, and mouth to catch any issues early and keep your smile healthy.",
    features: [
      "Comprehensive oral examination",
      "Digital X-rays when needed",
      "Gum health assessment",
      "Treatment planning",
      "Preventive recommendations",
    ],
    price: "$75 - $150",
    duration: "30-45 minutes",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "fillings",
    title: "Fillings & Restorations",
    subtitle: "Cavity Treatment",
    description: "We offer tooth-colored composite fillings that blend seamlessly with your natural teeth. Our restorations are durable, aesthetically pleasing, and preserve more of your natural tooth structure.",
    features: [
      "Tooth-colored materials",
      "Mercury-free options",
      "Minimal tooth removal",
      "Same-day treatment",
      "Natural appearance",
    ],
    price: "$150 - $350",
    duration: "30-60 minutes",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 gradient-mesh relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
              Comprehensive Dental Care for{" "}
              <span className="text-primary-500">Every Need</span>
            </h1>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed">
              From routine checkups to advanced procedures, we provide personalized
              care using the latest technology. Explore our services and discover
              how we can help you achieve your best smile.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className={`stagger-children grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full mb-6">
                    <span className="font-body text-sm font-medium">{service.subtitle}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-body text-charcoal/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div>
                      <p className="font-body text-sm text-charcoal/50">Starting from</p>
                      <p className="font-display text-2xl font-bold text-primary-500">{service.price}</p>
                    </div>
                    <div className="w-px h-12 bg-charcoal/10" />
                    <div>
                      <p className="font-body text-sm text-charcoal/50">Duration</p>
                      <p className="font-body font-semibold text-charcoal">{service.duration}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>Book This Service</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    {/* Background decorative element */}
                    <div
                      className={`absolute -top-4 ${
                        index % 2 === 1 ? "-left-4" : "-right-4"
                      } w-full h-full bg-accent-500/20 rounded-3xl`}
                    />

                    {/* Main card */}
                    <div
                      className={`relative rounded-3xl overflow-hidden ${
                        service.featured ? "bg-primary-500" : "bg-white shadow-soft-lg"
                      } p-12`}
                    >
                      {service.featured && (
                        <div className="absolute top-6 right-6 bg-accent-500 text-charcoal text-xs font-semibold px-4 py-1.5 rounded-full">
                          Most Popular
                        </div>
                      )}

                      {/* Icon */}
                      <div
                        className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 ${
                          service.featured ? "bg-white/20 text-white" : "bg-primary-50 text-primary-500"
                        }`}
                      >
                        {service.icon}
                      </div>

                      {/* Decorative pattern */}
                      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
                        <svg viewBox="0 0 100 100" fill="currentColor" className={service.featured ? "text-white" : "text-primary-500"}>
                          <circle cx="50" cy="50" r="40" strokeWidth="0.5" stroke="currentColor" fill="none" />
                          <circle cx="50" cy="50" r="30" strokeWidth="0.5" stroke="currentColor" fill="none" />
                          <circle cx="50" cy="50" r="20" strokeWidth="0.5" stroke="currentColor" fill="none" />
                        </svg>
                      </div>

                      {/* Placeholder for service image */}
                      <div className={`aspect-video rounded-2xl flex items-center justify-center ${
                        service.featured ? "bg-white/10" : "bg-gray-50"
                      }`}>
                        <p className={`font-body text-sm ${service.featured ? "text-white/50" : "text-charcoal/30"}`}>
                          Service Image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Insurance & Payment Options
            </h2>
            <p className="font-body text-white/80 text-lg">
              We accept most major insurance plans and offer flexible payment options
              to make quality dental care accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Delta Dental", "Cigna", "Aetna", "MetLife", "Guardian", "United Healthcare", "BlueCross", "Humana"].map((insurance) => (
              <div
                key={insurance}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <p className="font-body font-medium">{insurance}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-body text-white/70">
            Don&apos;t see your insurance? <Link href="/contact" className="text-accent-500 hover:underline">Contact us</Link> to verify coverage.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-mesh">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-soft-lg text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-body text-charcoal/70 text-lg mb-10 max-w-xl mx-auto">
              Schedule a consultation to discuss your dental needs and create
              a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <a href="tel:5551234567" className="btn-outline flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
