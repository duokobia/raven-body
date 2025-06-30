"use client";

import { useState } from "react";
import Link from "next/link";
import XIcon from "../icons/x-icon";
import HamburgerIcon from "../icons/hamburger-icon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F6EEE8] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="LOGO text-2xl font-semibold text-[#2f4858] font-playfair"
        >
          <span className="text-[#2f4858] hover:text-[#ff8c66]">Raven</span>
          <span className="text-[#ff8c66] hover:text-[#2f4858]">Body</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 text-xl hover:text-[#ff8c66] transition font-lora"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XIcon width={24} height={24} />
          ) : (
            <HamburgerIcon width={24} height={24} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#F6EEE8] px-6 pb-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-lg hover:text-[#ff8c66] transition font-lora"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
