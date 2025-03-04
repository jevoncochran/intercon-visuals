import React from "react";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/#home" },
  { title: "Portfolio", href: "/#porfolio" },
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="flex flex-col items-center w-full space-y-4">
        <Image
          src="/assets/nav/logo-black.png"
          alt="Intercon Visuals"
          width={150}
          height={100}
        />
        <nav className="">
          <ul className="flex space-x-10 justify-center">
            <li>
              <a href="/" className="text-black hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="text-black hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="text-black hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
