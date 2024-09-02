"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../public/login-image.webp";
import { ImFacebook2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useContext } from "react";
import { ImGithub } from "react-icons/im";
import { AuthContext } from "@/lib/auth-provider";

export default function LoginForm() {
  const { login } = useContext(AuthContext) as IAuth0;

  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">
              Sign in or create an account
            </CardTitle>
            <CardDescription>
              <p className="text-center">
                Connect with Our Library Community—Log In to Enjoy Seamless
                Reading, Personalized Recommendations, and a Wealth of Knowledge
                at Your Fingertips!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => login("github")}
              >
                <ImGithub className="fill-black mr-2 h-4 w-4" /> Continue with
                Github
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => login("facebook")}
              >
                <ImFacebook2 className="fill-primary mr-2 h-4 w-4" /> Continue
                with Facebook
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => login("google-oauth2")}
              >
                <FcGoogle className="mr-2 h-4 w-4" /> Continue with Google
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <Image
            src={loginImage}
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
}
