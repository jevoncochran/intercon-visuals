"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/#porfolio" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center px-8 py-4">
      <div className="md:flex justify-between items-center w-full space-y-4">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/assets/nav/logo-black.png"
              alt="Intercon Visuals"
              width={150}
              height={100}
            />
          </Link>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white top-26 w-full h-[calc(100vh-5rem)] flex flex-col items-center mt-4 space-y-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="uppercase text-black hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex space-x-3 mt-2">
              <SocialIcon
                url="https://instagram.com/interconvisuals"
                style={{ height: 25, width: 25 }}
              />
              <SocialIcon
                url="https://youtube.com/@interconvisuals"
                style={{ height: 25, width: 25 }}
              />
              <SocialIcon
                url="https://facebook.com/interconvisuals"
                style={{ height: 25, width: 25 }}
              />
              <SocialIcon
                url="https://twitter.com/interconvisuals"
                style={{ height: 25, width: 25 }}
              />
            </div>
          </div>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 justify-center">
          {navLinks.map((page) => (
            <a
              key={page.title}
              href={page.href}
              className="text-black hover:text-gray-300 uppercase"
            >
              {page.title}
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          {" "}
          <SocialIcon
            url="https://instagram.com/interconvisuals"
            target="_blank"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://youtube.com/@interconvisuals"
            target="_blank"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://facebook.com/interconvisuals"
            target="_blank"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://twitter.com/interconvisuals"
            target="_blank"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
