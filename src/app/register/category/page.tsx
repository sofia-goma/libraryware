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
import { GrLinkNext } from "react-icons/gr";

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
    <main className="flex items-center h-[100vh] w-screen form">
      <div className="m-[4vw] w-1/2">
        <Logo active={false} />
      </div>
      <div className="bg-[#3c596899] h-auto p-[4vw] rounded-[30px] w-[40vw]">
        <div className="flex flex-col items-center text-[#f2efdd] gap-2 mb-3">
          <h1 className="text-lg text-[#f2efdd]">
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
            className="text-sm text-[#f2efdd] flex justify-end items-center gap-2 hover:gap-0 hover:transition-all hover:pr-1 w-full cursor-pointer"
          >
            <span>Passer</span>

            <GrLinkNext />
          </div>
        </div>
      </div>
    </main>
  );
}
