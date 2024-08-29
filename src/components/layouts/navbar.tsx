"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-[10vh]">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl font-bold text-blue-500">Library</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-blue-500">Home</a>
          </Link>
          <Link href="/books">
            <a className="text-gray-600 hover:text-blue-500">Books</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-blue-500">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-blue-500">Contact</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <a className="text-gray-600 hover:text-blue-500">Login</a>
          </Link>
          <Link href="/signup">
            <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Sign Up
            </a>
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-1">
            <Link href="/">
              <a className="block text-gray-600 hover:text-blue-500">Home</a>
            </Link>
            <Link href="/books">
              <a className="block text-gray-600 hover:text-blue-500">Books</a>
            </Link>
            <Link href="/about">
              <a className="block text-gray-600 hover:text-blue-500">About</a>
            </Link>
            <Link href="/contact">
              <a className="block text-gray-600 hover:text-blue-500">Contact</a>
            </Link>
            <Link href="/login">
              <a className="block text-gray-600 hover:text-blue-500">Login</a>
            </Link>
            <Link href="/signup">
              <a className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
