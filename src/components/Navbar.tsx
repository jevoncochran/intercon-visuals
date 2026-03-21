"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Services", href: "/#services" },
  { title: "Portfolio", href: "/#portfolio" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  "https://instagram.com/interconvisuals",
  "https://youtube.com/@interconvisuals",
  "https://facebook.com/interconvisuals",
  "https://tiktok.com/@interconvisuals",
];

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSamePathLinkClick = (path: string, linkHref: string) => {
    if (path === linkHref) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="absolute top-0 left-0 z-30 w-full flex justify-center px-6 md:px-8 py-4">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/nav/logo-white-green.png"
              alt="Intercon Visuals"
              width={500}
              height={250}
              className="h-20 sm:h-24 md:h-32 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-16 justify-center">
          {navLinks.map((page) => (
            <Link
              key={page.title}
              href={page.href}
              className="relative font-[family-name:var(--font-montserrat)] uppercase text-sm md:text-base font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-lime-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {page.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((url) => (
            <SocialIcon
              key={url}
              url={url}
              target="_blank"
              bgColor="transparent"
              fgColor="#ffffff"
              className="!flex !items-center !justify-center !w-10 !h-10 !rounded-full !border !border-lime-400 hover:!bg-lime-400/10 !transition-colors !duration-300"
              style={{ height: 40, width: 40 }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="relative z-50 flex h-full w-full flex-col px-6 pt-6 pb-10">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => handleSamePathLinkClick(pathName, "/")}
              >
                <Image
                  src="/assets/nav/logo-white-green.png"
                  alt="Intercon Visuals"
                  width={500}
                  height={250}
                  className="h-20 w-auto"
                  priority
                />
              </Link>

              <button
                className="flex items-center justify-center text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={30} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-[family-name:var(--font-montserrat)] uppercase text-white text-2xl font-semibold tracking-[0.16em] transition-colors duration-300 hover:text-lime-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              {socialLinks.map((url) => (
                <SocialIcon
                  key={url}
                  url={url}
                  target="_blank"
                  bgColor="transparent"
                  fgColor="#ffffff"
                  className="!flex !items-center !justify-center !w-11 !h-11 !rounded-full !border !border-lime-400 hover:!bg-lime-400/10 !transition-colors !duration-300"
                  style={{ height: 22, width: 22 }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
