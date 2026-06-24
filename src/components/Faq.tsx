"use client";

import { useState } from "react";

const Gold = "#C79A3A";

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`transition-all duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={Gold}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes DTX Digital different from other marketing agencies?",
      answer: "We combine AI-powered automation with strategic execution, building systems that scale your revenue while reducing manual effort. Unlike traditional agencies, we focus on long-term infrastructure, not just campaigns."
    },
    {
      question: "We are a traditional industrial company; is this too futuristic for us?",
      answer: "Not at all. Our systems are designed to integrate with any industry. We help traditional businesses modernize their marketing and operations without disrupting what already works."
    },
    {
      question: "What results can I expect from your services?",
      answer: "Clients typically see measurable improvements in lead generation, conversion rates, and revenue within 30-60 days. We track everything and provide transparent reporting."
    },
    {
      question: "What is AEO, and how does it help my business rank higher?",
      answer: "Answer Engine Optimization (AEO) optimizes your content for AI-powered search engines like ChatGPT and Google's AI Overviews, helping you appear in featured snippets and AI-generated answers."
    },
    {
      question: "Do you only provide marketing, or also build tech infrastructure?",
      answer: "Both. We build the complete tech infrastructure including CRM, automation workflows, analytics dashboards, and AI-powered marketing systems tailored to your business."
    },
    {
      question: "How fast can we launch campaigns or projects?",
      answer: "Most campaigns launch within 1-2 weeks. For full-scale tech implementation, timelines range from 2-4 weeks depending on complexity. We prioritize speed without sacrificing quality."
    },
    {
      question: "Is this just another AI tool or a long-term business strategy?",
      answer: "This is a comprehensive business strategy. We combine AI capabilities with strategic planning, continuous optimization, and scalable infrastructure for sustained growth."
    },
    {
      question: "Is this suitable for small businesses or only large companies?",
      answer: "We work with businesses of all sizes. Our solutions are modular and scalable, designed to grow with your business whether you're a startup or an enterprise."
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8F5F0] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-[#C79A3A]">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.5px] sm:text-4xl md:text-5xl lg:text-[48px]">
            Elite Operations <span className="text-[#C79A3A]">FAQ</span>
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-gray-500 sm:text-lg">
            Everything you need to know before you start scaling.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#C79A3A] bg-white shadow-[0_8px_30px_rgba(199,154,58,0.12)]' 
                    : 'border-gray-200/80 bg-white/80 hover:border-[#C79A3A]/30 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors duration-200 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-300 pr-2 ${
                    isOpen ? 'text-[#C79A3A]' : 'text-gray-800 group-hover:text-[#C79A3A]/80'
                  }`}>
                    {faq.question}
                  </span>

                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-[#C79A3A] text-white shadow-[0_4px_12px_rgba(199,154,58,0.3)]' : 'bg-gray-100 text-gray-400 group-hover:bg-[#C79A3A]/10'
                  }`}>
                    <ArrowIcon open={isOpen} />
                  </span>
                </button>

                {/* Answer with smooth animation */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className={`h-px w-full bg-gradient-to-r from-transparent via-[#C79A3A]/30 to-transparent mb-4 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`} />
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Still have questions?{" "}
            <a 
              href="/contact" 
              className="text-[#C79A3A] font-semibold hover:text-[#b0852e] transition-colors duration-200 hover:underline"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}