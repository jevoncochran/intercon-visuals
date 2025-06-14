import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/#porfolio" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center px-8 py-4">
      <div className="flex justify-between items-center w-full space-y-4">
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
        <div className="flex space-x-4 text-2xl">
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
