"use client";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Banner from "@/components/layouts/home/Banner";
import BookCarousel from "@/components/layouts/home/BookCarousel";
import Features from "@/components/layouts/home/Features";
import Team from "@/components/layouts/home/Team";
import Logo from "@/ui/logo";
import Link from "next/link";
import Button from "@/ui/button";
import Navbar from "@/components/layouts/navbar";
import { useState } from "react";
import NewsLetter from "@/components/layouts/home/NewsLetter";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* header  */}
      <header className="flex fixed top-0 w-full h-[15vh] bg-white z-50 p-[20px] gap-[15%] max-lg:gap-[5%]">
        <div className="w-[15%] max-lg:w-[40%] max-h-auto overflow-hidden">
          <Logo active={false} />
        </div>
        <div className="flex gap-[20%] w-[70%] max-lg:gap-[5%]">
          <div className="flex rounded-full border-2 border-blue-500 overflow-hidden max-w-[100%] mx-auto font-[sans-serif] w-full h-10">
            <input
              type="text"
              placeholder="Search Something..."
              className="w-full outline-none bg-white text-sm px-5"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="18px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
          <Link href="/login">
            <button className="max-lg:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              GET STARTED
            </button>
          </Link>
        </div>
        {/* <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
      </header>

      {/* <Header /> */}
      <main className="mt-[15vh]">
        {/* BOOK CAROUSEL */}
        <BookCarousel />
        {/* BANNER WELCOME */}
        {/* <Banner /> */}

        {/* FEATURES  */}
        <Features />

        {/* MEET OUR TEAM */}

        <Team />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
