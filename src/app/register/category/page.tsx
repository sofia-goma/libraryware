"use client";

import Button from "@/ui/button";
import Logo from "@/ui/logo";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { MyContext } from "@/lib/context";
import Badge from "@/ui/badge";

type Props = {};

export default function Page({}: Props) {
  const [choice, setChoice] = useState<string[]>([]);
  const router = useRouter();
  const {
    category,
    state: data,
    setState,
  }: {
    category?: any;
    state?: any;
    setState?: React.Dispatch<React.SetStateAction<any>>;
  } = useContext(MyContext);

  if (!category) {
    router.push("/register");
  }

  if (!data) {
    router.push("/register");
  }

  if (!setState) {
    router.push("/register");
  }

  const onClick = async () => {
    try {
      if (choice.length === 0)
        throw new Error("Choisisez au moins une catégorie");

      data.category = choice;

      const response = await axios.post("/api/signup", data);

      if (response.status === 200) {
        router.push("/user/dashboard");
      }
    } catch (error) {
      toast.error((error as any).message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main className="flex items-center h-[100vh] gap-[8%]">
      <div className="m-[3%]">
        <Logo />
      </div>
      <div className="bg-[#576980] h-auto p-[4%] rounded-[30px] w-[30vw]">
        <div className="flex flex-col items-center text-white gap-2 mb-3">
          <h1 className="text-lg text-[#2D7DC4]">
            Choisisez vos tendances préferés!
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {category.data.map((category: any, i: number) => (
            <Badge
              text={category.name}
              key={i}
              choice={choice}
              setChoice={setChoice}
            />
          ))}
        </div>
        <div className="text-center pt-5" onClick={onClick}>
          <Button text={"Valider"} active={true} />
        </div>
        <div className=" flex items-center justify-between w-full pt-2">
          <Link
            href="#"
            className="text-sm text-white hover:text-[#F4555A] text-right w-full"
          >
            Passer
          </Link>
        </div>
        <ToastContainer />
      </div>
    </main>
  );
}
