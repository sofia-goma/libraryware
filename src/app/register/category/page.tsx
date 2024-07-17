"use client";

import Button from "@/ui/button";
import Logo from "@/ui/logo";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "@/lib/context";
import Badge from "@/ui/badge";
import { toastError } from "@/lib/toast";
import Loading from "./loading";

type Props = {};

export default function Page({}: Props) {
  const [choice, setChoice] = useState<string[]>([]);
  const router = useRouter();
  const {
    categories,
    state,
    setState,
  }: {
    categories?: any;
    state?: any;
    setState?: React.Dispatch<React.SetStateAction<any>>;
  } = useContext(MyContext);

  if (!categories) {
    router.push("/register");
  }
  console.log(categories);
  const { data, isLoading, error: isError } = categories;
  if (!state) {
    router.push("/register");
  }

  if (!setState) {
    router.push("/register");
  }

  const onClick = async (str: string) => {
    try {
      if (str === "valide" && choice.length === 0)
        throw new Error("Choisisez au moins une catégorie ou  passer");

      if (str === "passe") state.category = [];

      if (str === "valide") state.category = choice;

      const response = await axios.post("/api/signup", state);

      console.log(response);

      if (response.status === 200) {
        router.push("/user/dashboard");
      }
    } catch (error: any) {
      if (!error.response) toastError(error.message);
      else toastError(error.response.state.message);
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
          {isLoading && <Loading />}
          {data &&
            data.data.map((category: any, i: number) => (
              <Badge
                text={category.name}
                key={i}
                choice={choice}
                setChoice={setChoice}
              />
            ))}
        </div>
        <div className="text-center pt-5" onClick={() => onClick("valide")}>
          <Button text={"Valider"} active={true} />
        </div>
        <div className=" flex items-center justify-between w-full pt-2">
          <div
            onClick={() => onClick("passe")}
            className="text-sm text-white hover:text-[#F4555A] text-right w-full"
          >
            Passer
          </div>
        </div>
      </div>
    </main>
  );
}
