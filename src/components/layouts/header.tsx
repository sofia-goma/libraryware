"use client";
import { useContext } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/shared/logo";
import ModeToggle from "../shared/mode-toggle";
import { GoogleIcon } from "../icons/google";
import { AuthContext } from "@/providers/auth-provider";

export default function Header() {
  const { login } = useContext(AuthContext) as IAuth0;
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

          {/* <Searchbar /> */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => login("google-oauth2")}
            >
              <GoogleIcon className="mr-2 h-4 w-4" /> Continue with Google
            </Button>
            {/* <Link href="/login">
              <Button>SIGN IN</Button>
            </Link> */}
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
      <Separator />
    </header>
  );
}
