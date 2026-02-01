"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 gradient-mesh relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-accent-500 font-semibold tracking-wider uppercase text-sm">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal mt-4 mb-6">
              Let&apos;s Start Your{" "}
              <span className="text-primary-500">Smile Journey</span>
            </h1>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed">
              Have questions or ready to book? We&apos;re here to help. Reach out
              to us and our friendly team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                    Message Sent!
                  </h3>
                  <p className="font-body text-charcoal/60 mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-charcoal/60 mb-8">
                    Fill out the form below and we&apos;ll be in touch soon.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-body text-sm font-medium text-charcoal mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 font-body
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/20
                                   placeholder:text-charcoal/40"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-body text-sm font-medium text-charcoal mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 font-body
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/20
                                   placeholder:text-charcoal/40"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body text-sm font-medium text-charcoal mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 font-body
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/20
                                   placeholder:text-charcoal/40"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block font-body text-sm font-medium text-charcoal mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 font-body
                                   focus:outline-none focus:ring-2 focus:ring-primary-500/20
                                   text-charcoal appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="cleaning">Teeth Cleaning</option>
                          <option value="whitening">Teeth Whitening</option>
                          <option value="implants">Dental Implants</option>
                          <option value="emergency">Emergency Care</option>
                          <option value="checkup">Dental Checkup</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-body text-sm font-medium text-charcoal mb-2"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-0 font-body
                                 focus:outline-none focus:ring-2 focus:ring-primary-500/20
                                 placeholder:text-charcoal/40 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2
                               disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Address</p>
                      <p className="font-body text-charcoal/60">
                        123 Main Street<br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Phone</p>
                      <a href="tel:5551234567" className="font-body text-primary-500 hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-charcoal">Email</p>
                      <a href="mailto:hello@smiledental.com" className="font-body text-primary-500 hover:underline">
                        hello@smiledental.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="font-body text-charcoal">{schedule.day}</span>
                      <span className="font-body font-semibold text-primary-500">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-body text-sm text-charcoal/70">
                      Emergency care available 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-charcoal/40">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-body text-sm">Google Maps Embed</p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 font-body font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-white/80">
              Have questions? Here are answers to some of our most commonly asked questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Do you accept new patients?",
                a: "Yes! We're always welcoming new patients to our practice. You can book your first appointment online or give us a call.",
              },
              {
                q: "What insurance do you accept?",
                a: "We accept most major insurance plans including Delta Dental, Cigna, Aetna, MetLife, and more. Contact us to verify your specific coverage.",
              },
              {
                q: "How do I schedule an appointment?",
                a: "You can schedule online through our website, call us at (555) 123-4567, or use our AI chat assistant available 24/7.",
              },
              {
                q: "What if I have a dental emergency?",
                a: "We offer same-day emergency appointments. Call us immediately at (555) 123-4567, and we'll do our best to see you as soon as possible.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="font-display text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="font-body text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
