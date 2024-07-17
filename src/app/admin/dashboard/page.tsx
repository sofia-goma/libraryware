"use client";

import useAxios from "@/lib/axios.fetch";
import { MyContext } from "@/lib/context";
import BookTab from "@/ui/bookTab";
import Statistique from "@/ui/statistique";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const { data }: { data?: any } = useContext(MyContext);
  console.log(data);
  return (
    <div className="mx-[5%] mt-[2vh] w-[80%] h-[88vh] overflow-y-scroll">
      <Statistique />
      <BookTab />
    </div>
  );
}
