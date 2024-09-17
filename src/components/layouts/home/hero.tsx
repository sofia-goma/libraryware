"use client";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import hero from "../../../../public/hero.png";
import Image from "next/image";
import { AuthContext } from "@/providers/auth-provider";
import { GoogleIcon } from "@/components/icons/google";

export default function Hero() {
  const { login } = useContext(AuthContext) as IAuth0;
  return (
    <div className="container w-full flex bg-background flex-col md:flex-row text-center md:text-start items-center md:gap-4 gap-8">
      <div className="flex-1 flex gap-6 flex-col">
        <h3 className="text-foreground sm:text-4xl text-3xl font-bold">
          Welcome to LIBRARYWAVE
        </h3>
        <p className="text-foreground">
          Discover a world of knowledge and adventure at your fingertips. Our
          online library offers an extensive collection of books, research
          materials, and multimedia resources to ignite your curiosity and
          support your learning journey. Explore our vast catalog, access
          exclusive content, and enjoy a seamless reading experience anytime,
          anywhere.
        </p>
        <div className="flex justify-center md:gap-4 items-center md:justify-start">
          <Button size="lg" onClick={() => login("google-oauth2")}>
            GET STARTED
          </Button>
          <div className="hidden md:block">
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => login("google-oauth2")}
            >
              <GoogleIcon className="mr-2 h-4 w-4" />
              <span className="hidden md:block">Continue with Google</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 md:h-[470px]">
        <Image
          src={hero}
          className="w-full h-full md:object-contain"
          alt="hero image"
        />
      </div>
    </div>
  );
}
