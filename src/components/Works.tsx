import Link from "next/link";

const Gold = "#C79A3A";

function StepIcon({ type }: { type: "diagnose" | "build" | "launch" | "optimize" | "scale" }) {
  if (type === "diagnose") {
    return (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <path d="M5 8H21V20H5V8Z" stroke={Gold} strokeWidth="2" />
        <path d="M8 12H18M8 16H14" stroke={Gold} strokeWidth="2" />
        <circle cx="22" cy="20" r="4" stroke={Gold} strokeWidth="2" />
        <path d="M25 23L28 26" stroke={Gold} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "build") {
    return (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <path d="M9 6L24 21" stroke={Gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M7 8L12 3L17 8L12 13L7 8Z" stroke={Gold} strokeWidth="2" />
        <path d="M19 16L14 21" stroke={Gold} strokeWidth="2" />
      </svg>
    );
  }

  if (type === "launch") {
    return (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <path d="M18 4C13 5 9 9 7 15L3 18L9 19L11 25L14 21C20 19 24 15 26 9C27 6 25 3 22 4H18Z" fill={Gold} />
        <circle cx="19" cy="11" r="2" fill="white" />
        <path d="M8 20L5 25M12 22L9 27" stroke={Gold} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "optimize") {
    return (
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <path d="M5 24V16M12 24V10M19 24V13M26 24V6" stroke={Gold} strokeWidth="3" strokeLinecap="round" />
        <path d="M5 18L12 11L19 14L26 6" stroke={Gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
      <rect x="7" y="9" width="16" height="16" rx="3" fill={Gold} />
      <path d="M12 17L18 11H14M18 11V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5H25V14" stroke={Gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: "diagnose" as const,
      title: "Diagnose & Identify Opportunities",
      text: "We analyze your market, audience, and current systems to uncover high-impact growth gaps and revenue opportunities.",
    },
    {
      number: "02",
      icon: "build" as const,
      title: "Build Your AI Growth Engine",
      text: "We set up AI-powered marketing + tech infrastructure tailored to your business—ready to capture, convert, and scale.",
    },
    {
      number: "03",
      icon: "launch" as const,
      title: "Launch at Speed",
      text: "Campaigns, content, funnels, and systems go live rapidly—no delays, no bottlenecks.",
    },
    {
      number: "04",
      icon: "optimize" as const,
      title: "Optimize & Real-time",
      text: "We continuously track, test, and refine using live data to improve performance and maximize ROI.",
    },
    {
      number: "05",
      icon: "scale" as const,
      title: "Scale What Works",
      text: "Winning strategies are amplified instantly to drive consistent, compounding revenue growth.",
    },
  ];

  return (
    <section className="bg-[#F6F0E4] px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-[96px] text-black overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center">
          <div className="inline-block">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[4px] uppercase text-[#C79A3A]/60 mb-3 block">
              Our Process
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black uppercase leading-[1.1] tracking-[-0.8px]">
            How It <span className="text-[#C79A3A]">Works</span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-[34px] text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#4a4a4a] max-w-2xl mx-auto">
            Simple system. Relentless execution. Measurable growth.
          </p>
        </div>

        {/* Desktop Progress Bar */}
        <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-[56px] hidden lg:block">
          <div className="relative h-[40px] flex items-center">
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#C79A3A]/30" />
            <div className="absolute left-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#C79A3A]" />
            <div className="absolute right-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#C79A3A]" />
            
            <div className="relative z-10 grid w-full grid-cols-5">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C79A3A] text-[15px] font-black text-white shadow-[0_4px_12px_rgba(199,154,58,0.3)]">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 h-[2px] w-[calc(25%-20px)] -translate-y-1/2 bg-[#C79A3A]/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-10 md:mt-[33px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-[22px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-white rounded-xl sm:rounded-[13px] border border-[#C79A3A]/20 hover:border-[#C79A3A] px-5 sm:px-6 md:px-[28px] pt-6 sm:pt-7 md:pt-[27px] pb-6 sm:pb-7 md:pb-8 text-center transition-all duration-300 hover:shadow-[0_12px_32px_rgba(199,154,58,0.15)] hover:-translate-y-1"
            >
              {/* Mobile step number badge */}
              <div className="lg:hidden absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C79A3A] text-white text-[11px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(199,154,58,0.3)]">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 sm:h-[56px] sm:w-[56px] items-center justify-center rounded-full border border-[#e5d9c3] bg-[#F6F0E4] transition-all duration-300 group-hover:border-[#C79A3A] group-hover:shadow-[0_0_0_4px_rgba(199,154,58,0.1)]">
                <StepIcon type={step.icon} />
              </div>

              {/* Title */}
              <h3 className="mt-4 sm:mt-[19px] text-[15px] sm:text-[16px] md:text-[18px] font-black leading-[1.2]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 sm:mt-[18px] text-[13px] sm:text-[14px] md:text-[14.5px] font-medium leading-[1.6] text-[#5c5c5c]">
                {step.text}
              </p>

              {/* Subtle decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C79A3A] transition-all duration-300 group-hover:w-[40%] rounded-full" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 md:mt-[34px] flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex h-[50px] sm:h-[56px] min-w-[200px] sm:min-w-[240px] items-center justify-center rounded-[9px] bg-[#C79A3A] px-6 sm:px-8 text-[15px] sm:text-[17px] font-black uppercase text-black transition-all duration-300 hover:bg-[#b0852e] hover:shadow-[0_8px_24px_rgba(199,154,58,0.35)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Start Scaling Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}