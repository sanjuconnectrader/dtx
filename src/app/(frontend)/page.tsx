"use client";

import Image from "next/image";
import Link from "next/link";
import heroBg from "./images/dtx-hero.webp";
import home2 from "./images/home2.webp";
import home3 from "./images/Home3.webp";
import HowItWorksSection from "@/components/Works";
import FinalCtaSection from "@/components/Cta";
import FaqSection from "@/components/Faq";

const Gold = "#C79A3A";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="none">
      <circle cx="12" cy="12" r="9.2" stroke={Gold} strokeWidth="2" />
      <path
        d="M7.8 12.1l2.7 2.7 5.8-6"
        stroke={Gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="flex-shrink-0 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]">
      <path d="M25 0C21.717 0 18.4661 0.646644 15.4329 1.90301C12.3998 3.15938 9.6438 5.00087 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C9.6438 44.9991 12.3998 46.8406 15.4329 48.097C18.4661 49.3534 21.717 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 22.1 49.475 19.225 48.475 16.525L44.475 20.525C44.825 22 45 23.5 45 25C45 30.3043 42.8929 35.3914 39.1421 39.1421C35.3914 42.8929 30.3043 45 25 45C19.6957 45 14.6086 42.8929 10.8579 39.1421C7.10714 35.3914 5 30.3043 5 25C5 19.6957 7.10714 14.6086 10.8579 10.8579C14.6086 7.10714 19.6957 5 25 5C26.5 5 28 5.175 29.475 5.525L33.5 1.5C30.775 0.525 27.9 0 25 0ZM42.5 0L32.5 10V13.75L26.125 20.125C25.75 20 25.375 20 25 20C23.6739 20 22.4021 20.5268 21.4645 21.4645C20.5268 22.4021 20 23.6739 20 25C20 26.3261 20.5268 27.5979 21.4645 28.5355C22.4021 29.4732 23.6739 30 25 30C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25C30 24.625 30 24.25 29.875 23.875L36.25 17.5H40L50 7.5H42.5V0ZM25 10C21.0218 10 17.2064 11.5804 14.3934 14.3934C11.5804 17.2064 10 21.0218 10 25C10 28.9782 11.5804 32.7936 14.3934 35.6066C17.2064 38.4197 21.0218 40 25 40C28.9782 40 32.7936 38.4197 35.6066 35.6066C38.4197 32.7936 40 28.9782 40 25H35C35 27.6522 33.9464 30.1957 32.0711 32.0711C30.1957 33.9464 27.6522 35 25 35C22.3478 35 19.8043 33.9464 17.9289 32.0711C16.0536 30.1957 15 27.6522 15 25C15 22.3478 16.0536 19.8043 17.9289 17.9289C19.8043 16.0536 22.3478 15 25 15V10Z" fill="#C79A3A"/>
    </svg>
  );
}

function GrowthChartIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 55 55" fill="none" className="flex-shrink-0 sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px]">
      <path d="M51.7031 0L34.4297 6.48633L40.6289 10.3945C29.5547 24.3398 13.5352 32.9297 0 36.1992L3.83438 43.1836C19.043 38.2266 35.1445 29.2852 45.5156 13.4883L50.2383 16.4648L51.7031 0ZM52.6055 13.6758L52.043 20.0977L46.0313 16.3008C45.8203 16.6172 45.5977 16.9219 45.375 17.2383V54.6914H54.5156V13.6758H52.6055ZM34.957 28.6758C33.4688 29.9648 31.9336 31.1836 30.375 32.332V54.6914H39.5156V28.6758H34.957ZM20.4609 38.5195C18.7734 39.4102 17.0859 40.2305 15.375 41.0039V54.6914H24.5156V38.5195H20.4609ZM0.375 43.6758V54.6914H9.51562V43.6758H8.85C7.11328 44.3203 5.37773 44.918 3.65273 45.4688L2.82539 45.7266L1.70039 43.6758H0.375Z" fill="#C79A3A"/>
    </svg>
  );
}

function AlwaysOnIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="flex-shrink-0 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]">
      <path d="M27.5 0.125V5.175C37.375 6.4 45 14.8 45 25C45 33.025 40.2 40 33.2 43.2L27.5 37.5V50H40L36.95 46.95C44.775 42.675 50 34.4 50 25C50 12.05 40.125 1.375 27.5 0.125ZM22.5 0C17.625 0.5 13 2.4 9.2 5.525L12.75 9.075C15.588 6.88796 18.9497 5.48295 22.5 5V0ZM5.5 9.2C2.4 13 0.5 17.625 0 22.5H5C5.475 18.95 6.875 15.575 9.075 12.75L5.5 9.2ZM10 15V20H17.5V22.5H15C12.25 22.5 10 24.75 10 27.5V35H22.5V30H15V27.5H17.5C20.275 27.5 22.5 25.275 22.5 22.5V20C22.5 18.6739 21.9732 17.4021 21.0355 16.4645C20.0979 15.5268 18.8261 15 17.5 15H10ZM25 15V27.5H32.5V35H37.5V27.5H40V22.5H37.5V15H32.5V22.5H30V15H25ZM0 27.5C0.5 32.375 2.425 37 5.55 40.8L9.1 37.25C6.90401 34.4146 5.49029 31.0527 5 27.5H0ZM12.775 40.925L9.2 44.475C12.9984 47.5763 17.6221 49.4971 22.5 50V45C18.9541 44.5289 15.5975 43.1225 12.775 40.925Z" fill="#C79A3A"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="45" viewBox="0 0 45 55" fill="none" className="flex-shrink-0 sm:w-[42px] sm:h-[48px] lg:w-[45px] lg:h-[55px]">
      <path d="M22.5 0L0 10V25C0 38.875 9.6 51.85 22.5 55C35.4 51.85 45 38.875 45 25V10L22.5 0ZM40 25C40 36.3 32.55 46.725 22.5 49.825C12.45 46.725 5 36.3 5 25V13.25L22.5 5.475L40 13.25V25ZM11.025 26.475L7.5 30L17.5 40L37.5 20L33.975 16.45L17.5 32.925L11.025 26.475Z" fill="#C79A3A"/>
    </svg>
  );
}

function RedXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]">
      <path d="M4 4L14 14M14 4L4 14" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function GoldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]">
      <path d="M3 9L7 13L15 4" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ===== INTELLIGENT SYSTEMS ICONS =====
function BrandIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="12" y="14" width="46" height="35" rx="2" stroke="#C79A3A" strokeWidth="2" />
      <path d="M18 22H52M18 30H52M18 38H52" stroke="#C79A3A" strokeWidth="2" />
      <text x="21" y="34" fill="#C79A3A" fontSize="10" fontWeight="700">BRAND</text>
      <path d="M42 43L57 58M47 42L54 45L51 52" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="12" y="19" width="42" height="38" rx="3" stroke="black" strokeWidth="2" />
      <rect x="39" y="12" width="24" height="17" rx="3" stroke="black" strokeWidth="2" />
      <text x="43" y="24" fill="black" fontSize="9" fontWeight="800">CRM</text>
      <circle cx="26" cy="39" r="9" stroke="black" strokeWidth="2" />
      <path d="M26 30V39L33 45M39 35H50M39 43H50M39 51H50" stroke="black" strokeWidth="2" />
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="15" y="16" width="38" height="39" stroke="#C79A3A" strokeWidth="2" />
      <path d="M15 24H53" stroke="#C79A3A" strokeWidth="2" />
      <path d="M26 35H43L40 45H29L26 35Z" stroke="#C79A3A" strokeWidth="2" />
      <path d="M24 31H27L29 35" stroke="#C79A3A" strokeWidth="2" />
      <circle cx="31" cy="49" r="2" fill="#C79A3A" />
      <circle cx="39" cy="49" r="2" fill="#C79A3A" />
      <rect x="47" y="28" width="12" height="26" rx="2" stroke="#C79A3A" strokeWidth="2" />
      <path d="M51 35H55M52 41H54" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function AiSearchIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="15" y="13" width="40" height="44" rx="2" stroke="black" strokeWidth="2" />
      <path d="M21 23H49M21 31H42M21 39H36" stroke="black" strokeWidth="2" />
      <path d="M45 38L55 48M52 38L55 41L52 44" stroke="black" strokeWidth="2" />
      <text x="34" y="52" fill="black" fontSize="11" fontWeight="800">AI</text>
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="16" y="20" width="38" height="27" stroke="#C79A3A" strokeWidth="2" />
      <path d="M35 20V14M26 14L35 20L44 14" stroke="#C79A3A" strokeWidth="2" />
      <path d="M31 29L43 35L31 41V29Z" stroke="#C79A3A" strokeWidth="2" />
      <circle cx="35" cy="35" r="15" stroke="#C79A3A" strokeWidth="2" />
      <path d="M28 54H42M35 47V54" stroke="#C79A3A" strokeWidth="2" />
    </svg>
  );
}

function AdsIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 70 70" fill="none" className="flex-shrink-0 sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px]">
      <rect x="16" y="14" width="38" height="34" rx="2" stroke="black" strokeWidth="2" />
      <path d="M16 23H54" stroke="black" strokeWidth="2" />
      <path d="M31 30L43 36L31 42V30Z" stroke="black" strokeWidth="2" />
      <rect x="39" y="39" width="22" height="19" rx="2" stroke="black" strokeWidth="2" />
      <text x="43" y="53" fill="black" fontSize="10" fontWeight="800">ADS</text>
      <path d="M23 54H35M29 48V54" stroke="black" strokeWidth="2" />
    </svg>
  );
}

// ===== SECTION 4 FEATURE ICONS =====
function FeatureIcon({ type }: { type: "ai" | "target" | "systems" | "layers" | "growth" }) {
  if (type === "ai") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <path d="M12.5 1.8L15 6.6L20.3 7.4L16.4 11.1L17.3 16.4L12.5 13.9L7.7 16.4L8.6 11.1L4.7 7.4L10 6.6L12.5 1.8Z" stroke="#C79A3A" strokeWidth="2" />
        <text x="7" y="23" fill="#C79A3A" fontSize="8" fontWeight="800">AI</text>
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <circle cx="12.5" cy="12.5" r="9" stroke="#C79A3A" strokeWidth="2" />
        <circle cx="12.5" cy="12.5" r="4" stroke="#C79A3A" strokeWidth="2" />
        <path d="M12.5 12.5L21 4" stroke="#C79A3A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "systems") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <rect x="2.5" y="5" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <rect x="14.5" y="5" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <rect x="8.5" y="16" width="8" height="7" rx="1" stroke="#C79A3A" strokeWidth="2" />
        <path d="M10.5 8.5H14.5M12.5 12V16" stroke="#C79A3A" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
        <path d="M12.5 3L22 8L12.5 13L3 8L12.5 3Z" stroke="#C79A3A" strokeWidth="2" />
        <path d="M5 12L12.5 16L20 12M5 16L12.5 20L20 16" stroke="#C79A3A" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 25 25" fill="none" className="sm:w-[25px] sm:h-[25px]">
      <path d="M4 17L9 12L13 15L21 7" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7H21V12" stroke="#C79A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const points = [
    "Unified Revenue & Digital Infrastructure",
    "Autonomous 24/7 AI-Powered Workforce",
    "Authority-Grade Media & Content Studios",
    "Built to Outperform, Outscale, and Outlast",
  ];

  const features = [
    { icon: <TargetIcon />, title: "AI-Powered Systems", desc: "Automate outreach and scale without limits." },
    { icon: <GrowthChartIcon />, title: "Proven Results", desc: "Data-driven strategies that deliver measurable ROI." },
    { icon: <AlwaysOnIcon />, title: "Always On", desc: "24/7 AI workforce keeps your pipeline moving." },
    { icon: <ShieldIcon />, title: "Built to Last", desc: "Infrastructure designed to outperform and outlast." },
  ];

  const comparisons = [
    { isNegative: true, text: "Slow campaigns kill your momentum." },
    { isNegative: false, text: "We deploy high-velocity systems that launch, test, and scale at a pace the competition can't track." },
    { isNegative: true, text: "You're capturing traffic, not revenue." },
    { isNegative: false, text: "Raw clicks don't pay the bills. We architect precision-engineered environments that transform interest into contracted revenue." },
    { isNegative: true, text: "Your budget is draining without returns." },
    { isNegative: false, text: "We optimize every dollar with data-driven precision to maximize ROI and eliminate waste." },
  ];

  const intelligentCards = [
    {
      icon: <BrandIcon />,
      title: "Authority Branding & Web",
      mission:
        "Architecting digital headquarters that command premium market positioning.",
      difference:
        "Built for speed, total brand authority, and unmatched user clarity.",
    },
    {
      icon: <CrmIcon />,
      title: "The DTX Hub (AI & CRM)",
      mission:
        "Deploying 24/7 AI-powered systems that manage your frontline and lead follow-up.",
      difference:
        "Custom-built intelligence hard-wired into your revenue operations.",
    },
    {
      icon: <EcommerceIcon />,
      title: "Elite E-Commerce",
      mission:
        "Building high-fidelity storefronts engineered for maximum conversion and frictionless scale.",
      difference:
        "Performance-driven builds designed for total market dominance.",
    },
    {
      icon: <AiSearchIcon />,
      title: "Search & AI Dominance",
      mission:
        "Owning the results with next-gen AEO and surgical SEO to ensure you are the first answer.",
      difference:
        "Data-driven search strategies that outperform and outlast the competition.",
    },
    {
      icon: <MediaIcon />,
      title: "Multi-Channel Media Supremacy",
      mission:
        "Dominating the scroll and the airwaves with Social Media, Reels, and Static Posting, backed by Podcast and TV/OTT Broadcasting.",
      difference:
        "We ensure your brand is omnipresent - from the smartphone in their hand to the TV in their living room.",
    },
    {
      icon: <AdsIcon />,
      title: "Surgical Advertising",
      mission:
        "Precision-targeted acquisition across all channels to capture demand with zero wasted spend.",
      difference:
        "Aggressive, data-backed scaling focused on measurable revenue growth and RO",
    },
  ];

  const speedFeatures = [
    {
      icon: "ai",
      text: "AI-Powered Execution — Launch faster, optimize instantly, and scale without human bottlenecks.",
    },
    {
      icon: "target",
      text: "Precision Targeting — Reach the right audience at the right time with higher conversion rates.",
    },
    {
      icon: "systems",
      text: "Integrated Growth Systems — Capture, nurture, and convert leads across every channel.",
    },
    {
      icon: "layers",
      text: "Organized & Scalable — Eliminate wasted spend and maximize ROI with every move.",
    },
    {
      icon: "growth",
      text: "Automated Scaling — Identify what works and amplify it instantly for exponential growth.",
    },
  ] as const;

  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <Image
          src={heroBg}
          alt="DTX Digital hero background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 items-center px-4 py-16 sm:px-6 sm:py-20 md:gap-8 lg:grid-cols-[minmax(0,720px)_minmax(0,575px)] lg:gap-[50px] lg:px-[50px] xl:grid-cols-[760px_575px] xl:gap-[80px] xl:px-[70px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[-0.2px] text-[#D4A33C] sm:mb-[30px] sm:text-[16px] lg:text-[18px]">
              SMARTER OUTREACH • FASTER SALES • BIGGER GROWTH
            </p>

            <h1 className="text-[32px] font-black uppercase leading-[1.15] tracking-[-1.5px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[60px]">
              <span className="block whitespace-nowrap">
                DOMINATE YOUR MARKET
              </span>

              <span className="block whitespace-nowrap">
                WITH <span className="text-[#D4A33C]">DTX DIGITAL!</span>
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.75] text-white sm:mx-auto sm:mt-[28px] sm:text-[18px] lg:mx-0">
              DTX Digital builds AI-powered sales and marketing systems that
              automate outreach, improve follow-up, and turn scattered workflows
              into scalable revenue infrastructure.
            </p>

            <div className="mx-auto mt-6 max-w-md space-y-3 sm:mt-8 sm:space-y-4 lg:mx-0">
              {points.map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <CheckIcon />

                  <p className="text-[14px] font-extrabold leading-none text-white sm:text-[16px] lg:text-[18px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:mx-0 lg:justify-start">
              <Link
                href="/contact"
                className="flex h-[50px] min-w-[180px] items-center justify-center rounded-[10px] bg-[#D4A33C] px-6 text-[14px] font-black uppercase text-black transition hover:opacity-90 sm:h-[56px] sm:min-w-[200px] sm:text-[16px] lg:h-[61px] lg:min-w-[224px] lg:px-7 lg:text-[18px]"
              >
                SCALE MY BRAND
              </Link>

              <Link
                href="/results"
                className="flex h-[50px] min-w-[170px] items-center justify-center rounded-[10px] border border-white/80 bg-black/10 px-6 text-[14px] font-black uppercase text-white transition hover:bg-white/10 sm:h-[56px] sm:min-w-[190px] sm:text-[16px] lg:h-[61px] lg:min-w-[205px] lg:px-7 lg:text-[18px]"
              >
                SEE THE PROOF
              </Link>
            </div>
          </div>

          {/* Form Card */}
          <div className="mt-8 w-full max-w-[575px] justify-self-center rounded-[26px] border border-white/25 bg-white/10 px-6 py-8 shadow-2xl backdrop-blur-md sm:mt-10 sm:px-8 sm:py-10 lg:mt-0 lg:justify-self-end lg:px-[40px] lg:py-[38px] xl:px-[48px] xl:py-[44px]">
            <h2 className="mb-6 text-[28px] font-extrabold leading-none tracking-[-0.5px] sm:mb-8 sm:text-[32px] lg:mb-[34px] lg:text-[36px] xl:text-[38px]">
              Start Your <span className="text-[#D4A33C]">Growth</span> Audit
            </h2>

            <form className="space-y-4 sm:space-y-5 lg:space-y-6">
              {["First Name", "Last Name", "Phone Number", "Email"].map(
                (placeholder) => (
                  <input
                    key={placeholder}
                    type="text"
                    placeholder={placeholder}
                    className="h-[48px] w-full rounded-[8px] border border-white/30 bg-[#666666] px-4 text-[15px] font-medium text-white outline-none placeholder:text-white sm:h-[52px] sm:px-5 sm:text-[16px] lg:h-[56px] lg:px-[27px] lg:text-[18px]"
                  />
                )
              )}

              <textarea
                placeholder="Tell us about your goals"
                className="h-[80px] w-full resize-none rounded-[8px] border border-white/30 bg-[#666666] px-4 py-3 text-[15px] font-medium text-white outline-none placeholder:text-white sm:h-[85px] sm:px-5 sm:text-[16px] lg:h-[91px] lg:px-[27px] lg:py-[15px] lg:text-[18px]"
              />

              <button
                type="submit"
                className="flex h-[50px] min-w-[160px] items-center justify-center rounded-[10px] bg-[#D4A33C] px-6 text-[14px] font-black uppercase text-black transition hover:opacity-90 sm:h-[55px] sm:min-w-[180px] sm:text-[16px] lg:h-[60px] lg:min-w-[196px] lg:px-7 lg:text-[17px]"
              >
                BOOK THE WIN
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURES & GROWTH ===== */}
      <section className="bg-white px-4 py-10 text-black sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-20 xl:py-20">
        <div className="mx-auto max-w-[1420px]">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="text-center lg:text-left">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C79A3A] sm:text-xs lg:text-sm">
                Why DTX
              </span>
              <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Built for Brands Ready to{" "}
                <span className="text-[#C79A3A] whitespace-nowrap">Scale Smarter</span>
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-gray-600 sm:mt-3 sm:text-base lg:mx-0">
                We partner with ambitious businesses that demand growth, speed,
                and measurable results.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-gray-400 sm:gap-6 lg:gap-10 xl:gap-12">
              <span className="text-base font-bold tracking-widest sm:text-lg lg:text-xl xl:text-2xl">
                SONY
              </span>
              <span className="text-base font-semibold sm:text-lg lg:text-xl xl:text-2xl">Google</span>
              <span className="text-base font-bold tracking-widest sm:text-lg lg:text-xl xl:text-2xl">
                IBM
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-center transition-all hover:border-[#C79A3A]/30 hover:bg-[#f5efe3] hover:shadow-lg sm:p-5 lg:text-left lg:p-6 ${
                  index < 3 ? "lg:border-r lg:border-gray-200" : ""
                }`}
              >
                <div className="flex justify-center lg:justify-start">
                  <div className="scale-75 sm:scale-90 lg:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Section - Growth Execution */}
          <div className="mt-10 grid items-center gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:mt-20">
            <div className="relative order-2 h-[200px] overflow-hidden rounded-2xl sm:h-[280px] md:h-[320px] lg:order-1 lg:h-[400px] xl:h-[480px]">
              <Image
                src={home2}
                alt="Growth operation dashboard room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 text-center lg:text-left lg:order-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C79A3A] sm:text-xs lg:text-sm">
                The Difference
              </span>
              <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Your Growth Isn't Stuck.
                <br />
                <span className="text-[#C79A3A]">Your Execution Is.</span>
              </h2>

              <div className="mx-auto mt-4 max-w-lg space-y-3 text-sm leading-relaxed text-gray-600 sm:mt-6 sm:space-y-4 sm:text-base lg:mx-0">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    {item.isNegative ? <RedXIcon /> : <GoldCheckIcon />}
                    <p className={!item.isNegative ? 'font-medium text-gray-800' : ''}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center lg:justify-start sm:mt-8">
                <button className="rounded-lg bg-[#C79A3A] px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-105 sm:px-7 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5">
                  Upgrade Your Growth Operation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INTELLIGENT SYSTEMS ===== */}
      <section className="bg-[#F8F5F0] px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-[#C79A3A] sm:text-xs lg:tracking-[3px]">
              Our Solutions
            </span>
            <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-0.3px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px]">
              Intelligent Systems Built for <span className="text-[#C79A3A]">Scalable Growth</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-gray-500 sm:mt-4 sm:text-base lg:text-lg">
              Focused solutions designed to accelerate execution, improve
              precision, and drive measurable business impact.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {intelligentCards.map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100/80 hover:border-[#C79A3A]/30 sm:p-6 lg:text-left lg:p-7 xl:p-8"
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3A]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="flex justify-center lg:justify-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F8F5F0] transition-colors group-hover:bg-[#C79A3A]/10 sm:h-16 sm:w-16">
                    {card.icon}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-black leading-tight tracking-[-0.2px] sm:mt-5 sm:text-lg lg:text-xl">
                  {card.title}
                </h3>

                <div className="mt-3 sm:mt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C79A3A] sm:text-xs">
                    The Mission
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-sm">
                    {card.mission}
                  </p>
                </div>

                <div className="my-3 h-px bg-gray-200 sm:my-4" />

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black sm:text-xs">
                    The Difference
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-sm">
                    {card.difference}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center sm:mt-14 lg:mt-16">
            <p className="text-base font-semibold text-black sm:text-lg lg:text-xl">
              You Don't Need More Tools. You Need A System.
            </p>

            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-5 sm:flex-row sm:gap-4 lg:mt-6 lg:gap-5">
              <Link
                href="/contact"
                className="flex h-[46px] min-w-[180px] items-center justify-center rounded-lg bg-[#C79A3A] px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-105 sm:h-[50px] sm:min-w-[200px] sm:text-sm lg:h-[56px] lg:min-w-[220px] lg:px-8 lg:text-base"
              >
                Claim The Advantage
              </Link>

              <Link
                href="/contact"
                className="flex h-[46px] min-w-[180px] items-center justify-center rounded-lg border-2 border-black bg-transparent px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-black hover:text-white sm:h-[50px] sm:min-w-[200px] sm:text-sm lg:h-[56px] lg:min-w-[220px] lg:px-8 lg:text-base"
              >
                Set The New Standard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURES BUILT FOR SPEED ===== */}
      <section className="bg-white px-4 py-12 text-black sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-20 xl:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[2px] text-[#C79A3A] sm:text-xs lg:tracking-[3px]">
                Why DTX
              </span>

              <h2 className="mt-3 text-2xl font-black leading-[1.2] tracking-[-0.3px] sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px]">
                Features Built for Speed.
                <br />
                <span className="text-[#C79A3A]">
                  Benefits That Drive Revenue.
                </span>
              </h2>

              <div className="mx-auto mt-6 max-w-lg space-y-0 divide-y divide-gray-100 sm:mt-8 lg:mx-0">
                {speedFeatures.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 sm:gap-4 sm:py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C79A3A]/10 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                      <FeatureIcon type={item.icon} />
                    </div>

                    <p className="text-xs font-medium leading-relaxed text-gray-700 sm:text-sm lg:text-[15px] xl:text-[17px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center lg:justify-start sm:mt-8 lg:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-[46px] w-full items-center justify-center rounded-lg bg-[#C79A3A] px-6 text-sm font-black uppercase tracking-wide text-black transition-all hover:bg-[#D4A33C] hover:scale-[1.02] sm:w-auto sm:min-w-[240px] sm:px-7 sm:text-sm lg:h-[52px] lg:min-w-[280px] lg:px-8 lg:text-base"
                >
                  Rebuild Your Growth Engine
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[360px] lg:h-[440px] xl:h-[520px]">
              <Image
                src={home3}
                alt="Business analytics dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <HowItWorksSection/>
      <FinalCtaSection/>
      <FaqSection/>
    </>
  );
}