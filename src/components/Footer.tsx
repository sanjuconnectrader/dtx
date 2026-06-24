import Image from "next/image";
import Link from "next/link";

const Gold = "#C79A3A";

function SmallCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
      <circle cx="9" cy="9" r="8" stroke={Gold} strokeWidth="2" />
      <path
        d="M5.3 9L7.6 11.3L12.8 6.2"
        stroke={Gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterIcon({ type }: { type: "phone" | "email" | "location" }) {
  if (type === "phone") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
        <path
          d="M5.5 2.5L7.5 6.5L5.8 7.7C6.8 9.8 8.2 11.2 10.3 12.2L11.5 10.5L15.5 12.5L14.8 15.2C14.6 16 13.8 16.4 13 16.2C6.8 14.9 3.1 11.2 1.8 5C1.6 4.2 2 3.4 2.8 3.2L5.5 2.5Z"
          fill={Gold}
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
        <path
          d="M2 4H16V14H2V4Z"
          fill={Gold}
        />
        <path
          d="M2 5L9 10L16 5"
          stroke="black"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
      <path
        d="M9 1.8C6.2 1.8 4 4 4 6.8C4 10.6 9 16.2 9 16.2C9 16.2 14 10.6 14 6.8C14 4 11.8 1.8 9 1.8ZM9 8.8C7.9 8.8 7 7.9 7 6.8C7 5.7 7.9 4.8 9 4.8C10.1 4.8 11 5.7 11 6.8C11 7.9 10.1 8.8 9 8.8Z"
        fill={Gold}
      />
    </svg>
  );
}

function SocialIcon({ label, href }: { label: string; href?: string }) {
  return (
    <Link
      href={href || "#"}
      className="group flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#C79A3A]/40 text-[16px] font-bold text-white transition-all duration-300 hover:border-[#C79A3A] hover:bg-[#C79A3A]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(199,154,58,0.15)]"
      aria-label={`Visit our ${label} page`}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const solutions = [
    "Authority Branding & Web",
    "Multi-Channel Media (TV & Social)",
    "Search & AI Dominance (AEO)",
    "Elite E-Commerce (Shopify)",
    "The DTX Hub (AI & CRM)",
  ];

  const mission = [
    "Our Story",
    "Results (Proof)",
    "Claim Your Strategy Call",
    "Client Portal",
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[80px] py-12 sm:py-16 md:py-[86px]">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr] lg:gap-12 xl:gap-[90px]">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
         
            <p className="text-[18px] sm:text-[20px] font-medium leading-[1.55] text-white/90">
              Smarter Outreach • Faster Sales
              <br />
              Bigger Growth
            </p>

            <div className="mt-6 sm:mt-[30px] flex gap-3 sm:gap-[12px]">
              <SocialIcon label="f" href="#" />
              <SocialIcon label="in" href="#" />
              <SocialIcon label="◎" href="#" />
              <SocialIcon label="G" href="#" />
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="mb-5 sm:mb-[28px] text-[15px] sm:text-[18px] font-black uppercase tracking-wider text-[#C79A3A]">
              Solutions
            </h3>

            <ul className="space-y-4 sm:space-y-[22px]">
              {solutions.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="group flex items-center gap-3 sm:gap-[14px] text-[14px] sm:text-[16px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <SmallCheckIcon />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Column */}
          <div>
            <h3 className="mb-5 sm:mb-[28px] text-[15px] sm:text-[18px] font-black uppercase tracking-wider text-[#C79A3A]">
              The Mission
            </h3>

            <ul className="space-y-4 sm:space-y-[22px]">
              {mission.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="group flex items-center gap-3 sm:gap-[14px] text-[14px] sm:text-[16px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    <SmallCheckIcon />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-5 sm:mb-[28px] text-[15px] sm:text-[18px] font-black uppercase tracking-wider text-[#C79A3A]">
              Let's Connect
            </h3>

            <ul className="space-y-4 sm:space-y-[22px]">
              <li>
                <Link 
                  href="tel:+12532604227" 
                  className="group flex items-center gap-3 sm:gap-[14px] text-[16px] sm:text-[20px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                >
                  <FooterIcon type="phone" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    +1 (253) 260-4227
                  </span>
                </Link>
              </li>

              <li>
                <Link 
                  href="mailto:info@dtxdigital.net" 
                  className="group flex items-center gap-3 sm:gap-[14px] text-[15px] sm:text-[18px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                >
                  <FooterIcon type="email" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200 break-all">
                    info@dtxdigital.net
                  </span>
                </Link>
              </li>

              <li className="flex items-center gap-3 sm:gap-[14px] text-[16px] sm:text-[20px] font-medium text-white/90">
                <FooterIcon type="location" />
                <span>Scottsdale & Washington</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#C79A3A]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[80px]">
          <div className="flex min-h-[54px] flex-col items-center justify-between gap-3 py-4 text-[13px] sm:text-[15px] md:text-[16px] font-medium text-white/90 md:flex-row">
            <p className="text-center md:text-left">
              © 2026 DTX Digital. All Rights Reserved. Built for Dominance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-[22px]">
              <Link 
                href="/privacy-policy" 
                className="transition-colors duration-200 hover:text-white hover:underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-and-conditions" 
                className="transition-colors duration-200 hover:text-white hover:underline underline-offset-2"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/data-policy" 
                className="transition-colors duration-200 hover:text-white hover:underline underline-offset-2"
              >
                Data Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}