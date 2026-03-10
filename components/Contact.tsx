"use client";

import { useEffect, useRef, FormEvent } from "react";

const EMAIL = "saurbh.nishad@outlook.com";
const PHONE = "9717680234";
const LINKEDIN = "https://www.linkedin.com/in/saurabh-nishad";
const GITHUB = "https://github.com/saurabh-nishad";
const SITE_URL = "https://saurabh-nishad.github.io/saurabh_portfolio";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const inquiry = (form.elements.namedItem("inquiry") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Portfolio inquiry: ${inquiry}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="section-reveal py-20 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-400 mb-6">
          I&apos;m open to meaningful conversations around:
        </p>
        <ul className="text-slate-400 text-sm space-y-1 mb-8">
          <li>• consulting and architecture advisory</li>
          <li>• startup collaboration</li>
          <li>• embedded and connected product development</li>
          <li>• neurotechnology and wearable systems</li>
          <li>• technical leadership opportunities</li>
          <li>• investor-backed product creation</li>
        </ul>

        <div className="flex flex-wrap gap-6 mb-10 text-slate-300">
          <a href={`mailto:${EMAIL}`} className="hover:text-accent-green transition-colors">
            Email: {EMAIL}
          </a>
          <a href={`tel:${PHONE}`} className="hover:text-accent-green transition-colors">
            Phone: {PHONE}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-green transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-green transition-colors"
          >
            GitHub / Portfolio
          </a>
          <a
            href="/resume.pdf"
            download
            className="hover:text-accent-green transition-colors"
          >
            Download Resume
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-800 border border-[var(--border)] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-800 border border-[var(--border)] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-slate-400 mb-1">
              Inquiry type
            </label>
            <select
              id="inquiry"
              name="inquiry"
              className="w-full px-4 py-2.5 rounded-lg bg-surface-800 border border-[var(--border)] text-white focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
            >
              <option value="consulting">Consulting / Architecture advisory</option>
              <option value="startup-collab">Startup collaboration</option>
              <option value="product-dev">Embedded / connected product development</option>
              <option value="neurotech-wearables">Neurotech and wearable systems</option>
              <option value="leadership">Technical leadership opportunities</option>
              <option value="investor-partnership">Investor / partnership inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-800 border border-[var(--border)] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent resize-y"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-colors"
          >
            Send message
          </button>
        </form>

        <p className="mt-6 text-slate-500 text-sm">
          You can also reach out directly at{" "}
          <a href={`mailto:${EMAIL}`} className="text-accent-green hover:underline">
            {EMAIL}
          </a>{" "}
          or call {PHONE}. Portfolio:{" "}
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
            {SITE_URL}
          </a>
        </p>
      </div>
    </section>
  );
}
