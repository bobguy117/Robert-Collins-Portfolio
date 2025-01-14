"use client";

import { useState } from "react";
import Link from "next/link";

// Navigation bar for the website
// Buttons should bubble up when hovering
// To be added later
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white w-full" >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="block px-2 py-1 hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block px-2 py-1 hover:text-gray-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-2 py-1 hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="block px-2 py-1 hover:text-gray-400"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
