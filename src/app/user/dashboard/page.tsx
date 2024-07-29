"use client";

import useAxios from "@/lib/axios.fetch";
import React, { useEffect, useState } from "react";
import Citation from "../../../ui/citations";
import NewBook from "@/ui/newBooks";

type Props = {};

export default function Page({}: Props) {
  const [userId, setUserId] = useState<string | null>();
  useEffect(() => {
    let id: string | null;
    if (localStorage.getItem("id") !== undefined) {
      id = localStorage.getItem("id");
    } else {
      id = sessionStorage.getItem("id");
    }
    setUserId(id);
  }, []);

  const { data } = useAxios(`http://localhost:3000/api/users/${userId}`);

  if (!data) {
    console.log("Request ...");
  }
  return (
    <div className="flex gap-[5vw] mx-[5vw] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <Citation />
      <NewBook />
    </div>
  );
}
