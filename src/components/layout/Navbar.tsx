"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Velorem
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-6">
          <ThemeToggle />
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex">
          <div className="bg-gray-100 dark:bg-gray-800 w-3/4 max-w-xs h-full p-6 flex flex-col gap-6 shadow-lg animate-slideIn">
            {/* Close Button */}
            <button
              className="self-end"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Nav Links */}
            <Link
              href="/about"
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
