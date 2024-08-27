"use client";
import Router from "next/navigation";
import { Button } from '@/components/ui/button';
import Searchbar from "../ui/Searchbar";

import Link from "next/link";
import Logo from "../ui/Logo";


export default function Header() {
  // const router = Router();
  const goTodasboard = () => {
    // // Router.redirect('/register/');
    // const navigate = Router.useRouter();
    // navigate.push('/register');
    console.log('going to dashboard...');
  }
  return (
    <header className="tracking-wide z-50 sticky top-0">
      <section className="py-2 bg-blue-500 text-white text-center px-10">
        <p className="text-sm">Summer sale: Save up to 40%</p>
      </section>

      <nav className="bg-white w-full border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LibraryWave
            </span> */}
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button>GET STARTED</Button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <Searchbar />
          </div>
        </div>
      </nav>
    </header>
  );
}
