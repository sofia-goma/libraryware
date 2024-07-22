"use client";

import Tab from "@/ui/tab";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();

  const items = [
    { title: "Livres", href: "/admin/dashboard" },
    { title: "Membres", href: "/admin/dashboard/members" },
  ];

  return (
    <div>
      <p>
        <IoMdArrowBack /> Retour
      </p>
      <div>
        <div>{}</div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Tab items={items} />
      </div>
    </div>
  );
}
