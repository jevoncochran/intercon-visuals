"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Home", href: "/" },
  // Eventually, this will be its own route but it can be the home route for now
  { title: "Portfolio", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  // This closes the mobile menu when a link is clicked that doesn't change the route
  // Without this function, the mobile menu would only close on route changes
  const handleSamePathLinkClick = (path: string, linkHref: string) => {
    if (path === linkHref) {
      setMenuOpen(false);
    }
  };

  // Close menu *after* route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex justify-center px-8 py-4">
      <div className="md:flex justify-between items-center w-full space-y-4">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/assets/nav/logo-white.png"
              alt="Intercon Visuals"
              width={112.5}
              height={75}
            />
          </Link>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white w-full h-full flex flex-col items-center mt-4 space-y-4 md:hidden">
            <div className="flex justify-between w-full px-8">
              <Link
                href="/"
                onClick={() => handleSamePathLinkClick(pathName, "/")}
              >
                <Image
                  src="/assets/nav/logo-black.png"
                  alt="Intercon Visuals"
                  width={112.5}
                  height={75}
                />
              </Link>

              <button
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                passHref
                className="uppercase text-black hover:text-gray-400"
                onClick={() => handleSamePathLinkClick(pathName, link.href)}
              >
                {link.title}
              </Link>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex space-x-3 mt-2">
              <SocialIcon
                url="https://instagram.com/interconvisuals"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://youtube.com/@interconvisuals"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://facebook.com/interconvisuals"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://twitter.com/interconvisuals"
                style={{ height: 30, width: 30 }}
              />
            </div>
          </div>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 justify-center">
          {navLinks.map((page) => (
            <a key={page.title} href={page.href} className="uppercase">
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
