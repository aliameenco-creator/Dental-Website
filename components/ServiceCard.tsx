"use client";

import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  icon,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative h-full rounded-3xl p-8 transition-all duration-500 hover-lift ${
          featured
            ? "bg-primary-500 text-white"
            : "bg-white shadow-soft hover:shadow-soft-lg"
        }`}
      >
        {/* Card overlap effect for non-featured */}
        {!featured && (
          <div className="absolute -top-2 -left-2 w-full h-full bg-accent-500/20 rounded-3xl -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
        )}

        {/* Featured badge */}
        {featured && (
          <div className="absolute -top-3 right-6 bg-accent-500 text-charcoal text-xs font-semibold px-4 py-1.5 rounded-full">
            Most Popular
          </div>
        )}

        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
            featured ? "bg-white/20" : "bg-primary-50"
          }`}
        >
          <div className={featured ? "text-white" : "text-primary-500"}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`font-display text-2xl font-semibold mb-3 ${
            featured ? "text-white" : "text-charcoal"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`font-body mb-6 leading-relaxed ${
            featured ? "text-white/80" : "text-charcoal/60"
          }`}
        >
          {description}
        </p>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p
              className={`font-body text-sm ${
                featured ? "text-white/60" : "text-charcoal/40"
              }`}
            >
              Starting from
            </p>
            <p
              className={`font-display text-2xl font-bold ${
                featured ? "text-accent-500" : "text-primary-500"
              }`}
            >
              {price}
            </p>
          </div>

          {/* Arrow */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${
              featured
                ? "bg-white/20 text-white"
                : "bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
