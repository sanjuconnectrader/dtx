import Image from "next/image";
import Link from "next/link";
import home5 from "../app/(frontend)/images/Herobanner.webp";


export default function FinalCtaSection() {
  return (
    <section className="relative min-h-[420px] sm:min-h-[460px] md:min-h-[480px] lg:h-[386px] w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <Image
        src={home5}
        alt="AI growth engine background"
        fill
        quality={100}
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

      {/* Subtle animated grain overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC4wNSIgLz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative z-10 flex h-full min-h-[420px] sm:min-h-[460px] md:min-h-[480px] lg:min-h-[386px] items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative accent line */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-[2px] bg-[#C79A3A]" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-black uppercase leading-[1.1] tracking-[-1px]">
            Stop Waiting.{" "}
            <span className="text-[#C79A3A] inline-block relative">
              Start Winning.
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#C79A3A]/30 rounded-full" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 md:mt-[24px] text-[15px] sm:text-[17px] md:text-[19px] font-medium leading-[1.6] text-white/90 max-w-2xl mx-auto">
            Every competitor that takes action today wins tomorrow.
            <br className="hidden sm:block" />
            <span className="inline-block mt-1 sm:mt-0">The only question is: will you choose to lead, or watch them take your market?</span>
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-7 md:mt-[29px] flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-[25px]">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex h-[50px] sm:h-[56px] min-w-[200px] sm:min-w-[260px] md:min-w-[295px] items-center justify-center rounded-[9px] bg-[#C79A3A] px-6 sm:px-8 text-[15px] sm:text-[17px] font-black uppercase text-black transition-all duration-300 hover:bg-[#b0852e] hover:shadow-[0_8px_32px_rgba(199,154,58,0.35)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Get a Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Secondary CTA - Ghost button with refined styling */}
            <Link
              href="/contact"
              className="group relative inline-flex h-[50px] sm:h-[56px] min-w-[200px] sm:min-w-[280px] md:min-w-[340px] items-center justify-center rounded-[9px] border border-white/50 bg-transparent px-6 sm:px-8 text-[15px] sm:text-[17px] font-black uppercase text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your AI Growth Engine
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust indicator */}
       
        </div>
      </div>
    </section>
  );
}