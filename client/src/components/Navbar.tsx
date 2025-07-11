"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Accessibility Analyzer
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="#analyze" className="hover:text-blue-600 dark:hover:text-blue-400">
            Analyze
          </Link>
          <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 text-gray-800 dark:text-gray-200">
          <Link
            href="/"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#analyze"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Analyze
          </Link>
          <Link
            href="#contact"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

