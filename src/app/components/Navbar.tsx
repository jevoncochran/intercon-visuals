import React from "react";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/#porfolio" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
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
        <nav>
          <ul className="flex space-x-10 justify-center">
            {navLinks.map((page) => (
              <li key={page.title} className="uppercase">
                <a href={page.href} className="text-black hover:text-gray-300">
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
