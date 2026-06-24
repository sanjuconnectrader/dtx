"use client";

import Link from "next/link";
import { useState } from "react";

const Gold = "#D4A33C";

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={Gold}>
      <path d="M6.6 10.8c1.5 3 3.9 5.4 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.2 21.9 2.1 13.8 2.1 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.7 2.2z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={Gold}>
      <path d="M2 5h20v14H2V5zm10 8 8-6H4l8 6zm0 2.2L4 9.2V17h16V9.2l-8 6z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={Gold}>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function SocialIcon({ children }: { children: string }) {
  return <span className="text-[24px] font-bold leading-none text-white">{children}</span>;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg shadow-black/50">
      {/* Top bar - hidden on mobile */}
      <div className="hidden border-b border-[#2b2108] lg:block">
        <div className="mx-auto flex h-[63px] max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-9 text-[18px]">
            <div className="flex items-center gap-4">
              <IconPhone />
              <span>+1 (253) 260-4227</span>
            </div>

            <div className="flex items-center gap-4">
              <IconMail />
              <span>info@dtxdigital.net</span>
            </div>

            <div className="flex items-center gap-4">
              <IconLocation />
              <span>Scottsdale &amp; Washington</span>
            </div>
          </div>

          <div className="flex items-center gap-7 text-[18px]">
            <span>Follow Us:</span>
            <SocialIcon>f</SocialIcon>
            <SocialIcon>in</SocialIcon>
            <SocialIcon>◎</SocialIcon>
            <SocialIcon>G</SocialIcon>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-[70px] items-center justify-between px-4 lg:h-[97px] lg:px-6 max-w-[1400px]">
        <Link href="/" className="flex items-center">
          <div className="leading-none">
            <div className="text-[38px] font-black tracking-[-2px] lg:text-[58px] lg:tracking-[-4px]">
              DT<span className="text-[#D4A33C]">X</span>
            </div>
            <div className="mt-[-2px] text-[11px] font-semibold tracking-[8px] text-[#D4A33C] lg:mt-[-4px] lg:text-[15px] lg:tracking-[13px]">
              DIGITAL
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[42px] text-[15px] font-bold uppercase lg:flex xl:gap-[86px] xl:text-[17px]">
          <Link href="/">Home</Link>
          <Link href="/our-mission">Our Mission</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/results">Results</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-[10px] bg-[#D4A33C] px-6 py-3 text-[15px] font-bold uppercase text-black lg:inline-block xl:px-8 xl:py-4 xl:text-[18px]"
          >
            Book a Strategy Call
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu - full width with thin separators */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[700px] border-t border-[#2b2108]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-black px-4 py-3">
          {/* Navigation links with separators */}
          <Link
            href="/"
            className="py-3 text-[15px] font-bold uppercase text-white border-b border-[#2b2108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/our-mission"
            className="py-3 text-[15px] font-bold uppercase text-white border-b border-[#2b2108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Mission
          </Link>
          <Link
            href="/solutions"
            className="py-3 text-[15px] font-bold uppercase text-white border-b border-[#2b2108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/results"
            className="py-3 text-[15px] font-bold uppercase text-white border-b border-[#2b2108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="mt-3 rounded-[10px] bg-[#D4A33C] py-3 text-center text-[15px] font-bold uppercase text-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Strategy Call
          </Link>

          {/* Contact Info with separators */}
          <div className="mt-4 flex flex-col border-t border-[#2b2108] pt-3 text-sm">
            <div className="flex items-center gap-3 py-2.5 border-b border-[#2b2108]">
              <IconPhone />
              <span>+1 (253) 260-4227</span>
            </div>
            <div className="flex items-center gap-3 py-2.5 border-b border-[#2b2108]">
              <IconMail />
              <span>info@dtxdigital.net</span>
            </div>
            <div className="flex items-center gap-3 py-2.5 border-b border-[#2b2108]">
              <IconLocation />
              <span>Scottsdale &amp; Washington</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 py-3">
              <span className="text-sm">Follow Us:</span>
              <SocialIcon>f</SocialIcon>
              <SocialIcon>in</SocialIcon>
              <SocialIcon>◎</SocialIcon>
              <SocialIcon>G</SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}