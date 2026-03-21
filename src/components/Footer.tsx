"use client";

import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const navLinks = [
  { title: "Portfolio", href: "/#portfolio" },
  { title: "Services", href: "/#services" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  "https://instagram.com/interconvisuals",
  "https://youtube.com/@interconvisuals",
  "https://facebook.com/interconvisuals",
  "https://tiktok.com/@interconvisuals",
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10 text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT: BRAND */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold mb-4">
              Intercon <span className="text-lime-400">Visuals</span>
            </h3>

            <p className="text-black/70 leading-relaxed max-w-sm">
              Cinematic content that builds brands and converts leads.
            </p>
          </div>

          {/* MIDDLE: NAV */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] uppercase text-sm tracking-[0.2em] text-black/50 mb-6">
              Navigation
            </h4>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-black/80 hover:text-lime-500 transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: CONTACT + SOCIAL */}
          <div>
            <div className="space-y-3 mb-6 text-black/70">
              <p className="text-sm uppercase tracking-[0.12em] text-black/50">
                Email
              </p>
              <a
                href="mailto:jevon@interconvisuals.com"
                className="block hover:text-lime-500 transition-colors duration-300"
              >
                jevon@interconvisuals.com
              </a>

              <p className="text-sm uppercase tracking-[0.12em] text-black/50 mt-4">
                Phone
              </p>
              <a
                href="tel:15108073300"
                className="block hover:text-lime-500 transition-colors duration-300"
              >
                (510) 807-3300
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(163,230,53,0.35)]"
            >
              Book a Free Consultation
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-8">
              {socialLinks.map((url) => (
                <div
                  key={url}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-lime-400 hover:bg-lime-400/10 transition-colors duration-300"
                >
                  <SocialIcon
                    url={url}
                    target="_blank"
                    bgColor="transparent"
                    fgColor="#000000"
                    style={{ height: 30, width: 30 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-black/10 mt-12 pt-6 text-center text-black/50 text-sm">
          © {new Date().getFullYear()} Intercon Visuals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
