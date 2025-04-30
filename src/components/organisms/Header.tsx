"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import ThemeToggle from "@/components/molecules/ThemeToggle";
import MobileMenu from "@/components/molecules/MobileMenu";

export default function Header() {
  // Navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-70 backdrop-blur-md dark:bg-background-dark dark:bg-opacity-70"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side - Theme Toggle, Language Switcher and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => {
              // TODO: Implement language switching logic
              console.log("Language switch clicked");
            }}
          >
            EN
          </button>
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </motion.header>
  );
}
