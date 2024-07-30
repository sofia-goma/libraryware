"use client";

import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "@/lib/context";
import CardDetail from "@/ui/cardDetail";

type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  if (!books.data) return;
  return (
    <div className="mx-[5vw] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <h1 className="text-3xl font-semibold py-2">Mon espace</h1>
      <div className="flex gap-[5vw] mb-4">
        {books.data.data.map((el: any, i: number) => (
          <CardDetail book={el} key={i} />
        ))}
      </div>
    </div>
  );
}
