"use client";

import useAxios from "@/lib/axios.fetch";
import React, { useEffect, useState } from "react";
import Citation from "../../../ui/citations";
import NewBook from "@/ui/newBooks";
import Recomend from "@/ui/recomend";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="mx-[5vw] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div className="flex gap-[5vw] mb-4">
        <Citation />
        <NewBook />
      </div>
      <Recomend />
    </div>
  );
}
