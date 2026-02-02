"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    bio: "With over 20 years of experience, Dr. Mitchell founded Smile Dental with a vision of providing exceptional, patient-centered care.",
    credentials: ["DDS, University of Michigan", "American Dental Association", "Academy of General Dentistry"],
  },
  {
    name: "Dr. Ali Chuhfan",
    role: "Cosmetic Dentistry Specialist",
    bio: "Dr. Chen specializes in cosmetic procedures and has transformed thousands of smiles with his artistic approach to dentistry.",
    credentials: ["DMD, Harvard School of Dental Medicine", "American Academy of Cosmetic Dentistry"],
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    bio: "Dr. Rodriguez has a special way with children, making dental visits fun and stress-free for our youngest patients.",
    credentials: ["DDS, UCLA", "Board Certified Pediatric Dentist"],
  },
  {
    name: "Maria Santos",
    role: "Lead Dental Hygienist",
    bio: "Maria has been with Smile Dental for 12 years and is known for her gentle touch and thorough cleanings.",
    credentials: ["RDH, Licensed Dental Hygienist", "Certified in Laser Dentistry"],
  },
];

const values = [
  {
    title: "Patient-Centered Care",
    description: "Every decision we make is guided by what's best for you. We listen, we explain, and we ensure you're comfortable every step of the way.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence in Everything",
    description: "We're committed to providing the highest quality care using the latest technology and techniques. Your smile deserves nothing less.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description: "Dentistry evolves, and so do we. Our team regularly attends training and conferences to bring you the best treatments available.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description: "We're proud to serve our community and give back through free dental days and educational programs for local schools.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "2008", event: "Dr. Mitchell founds Smile Dental Care" },
  { year: "2012", event: "Expanded to our current location" },
  { year: "2015", event: "Introduced digital X-ray technology" },
  { year: "2018", event: "Added cosmetic dentistry services" },
  { year: "2021", event: "Launched AI-powered patient portal" },
  { year: "2024", event: "Celebrated 2,500+ happy patients" },
];

export default function AboutPage() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    [valuesRef, teamRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
                About Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
                A Legacy of{" "}
                <span className="text-primary-500">Caring Smiles</span>
              </h1>
              <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-8">
                For over 15 years, Smile Dental Care has been transforming smiles
                and building lasting relationships with families in our community.
                We combine state-of-the-art technology with a warm, personal approach
                to make every visit comfortable and effective.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-4xl font-bold text-primary-500">15+</p>
                  <p className="font-body text-charcoal/60">Years of Service</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-primary-500">2,500+</p>
                  <p className="font-body text-charcoal/60">Happy Patients</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-primary-500">4.9</p>
                  <p className="font-body text-charcoal/60">Google Rating</p>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent-500/20 rounded-3xl" />
              <div className="relative bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl aspect-square flex items-center justify-center">
                <p className="text-white/50 font-body">Team Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
              Building Smiles, Building Trust
            </h2>
            <p className="font-body text-charcoal/70 text-lg leading-relaxed">
              What started as a small practice with a big dream has grown into
              a trusted destination for comprehensive dental care. Our journey
              has been guided by one simple principle: treat every patient like family.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-500 rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-display text-xl font-bold text-primary-500">{item.year}</p>
                  <p className="font-body text-charcoal/70">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-primary-500 text-white diagonal-top diagonal-bottom">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Drives Us
            </h2>
            <p className="font-body text-white/80 text-lg">
              Our core values shape everything we do, from how we treat our patients
              to how we continue to improve and grow.
            </p>
          </div>

          <div
            ref={valuesRef}
            className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6 text-charcoal">
                  {value.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="font-body text-white/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
              Meet the Experts
            </h2>
            <p className="font-body text-charcoal/70 text-lg">
              Our talented team of dental professionals is dedicated to providing
              you with exceptional care and a positive experience every visit.
            </p>
          </div>

          <div
            ref={teamRef}
            className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover-lift"
              >
                {/* Photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-display text-3xl text-white font-bold">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-primary-500 font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-body text-charcoal/60 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-2">
                    {member.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-body text-xs text-charcoal/50">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-mesh">
        <div className="container-custom">
          <div className="bg-primary-500 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="font-body text-white/80 text-lg mb-10">
                We&apos;d love to welcome you to Smile Dental Care. Schedule your
                first appointment and experience the difference.
              </p>
              <Link
                href="/contact"
                className="bg-accent-500 text-charcoal px-10 py-5 rounded-full font-body font-semibold
                         text-lg transition-all duration-300 hover:bg-accent-400 hover:shadow-lg
                         hover:-translate-y-1 active:scale-95 inline-block"
              >
                Schedule Your Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
