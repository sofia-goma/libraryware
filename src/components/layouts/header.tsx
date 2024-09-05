"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Searchbar from "../shared/searchbar";
import Link from "next/link";
import Logo from '@/components/shared/logo';

export default function Header() {
  return (
    <header className="tracking-wide bg-background z-50 sticky top-0">
      <section className="py-2 bg-primary text-primary-foreground text-center px-10">
        <p className="text-sm text-primary-foreground">
          Find Your Summer Escape with Our Exclusive Book Deals!
        </p>
      </section>

      <nav className="w-full">
        <div className="flex flex-nowrap gap-16 items-center justify-between lg:gap-24 py-4 container">
          <Logo />

          <Searchbar />

          <Link href="/login">
            <Button>SIGN IN</Button>
          </Link>
        </div>
      </nav>
      <Separator />
    </header>
  );
}