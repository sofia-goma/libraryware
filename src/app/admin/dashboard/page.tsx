"use client";

import useAxios from "@/lib/axios.fetch";
import Statistique from "@/ui/statistique";
import Tab from "@/ui/tab";
import React, { useEffect, useState } from "react";

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

  const { data } = useAxios(`http://localhost:3000/api/admins/${userId}`);

  if (!data) {
    return <div>Loadind...</div>;
  }

  return (
    <div className="mx-[5%] mt-[2%] w-[80%] h-[50px]">
      <Statistique />
    </div>
  );
}
