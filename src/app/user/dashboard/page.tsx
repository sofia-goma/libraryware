"use client";

import { MyContext } from "@/lib/context";
import React, { useContext } from "react";

type Props = {};

export default function Page({}: Props) {
  const { user }: { user?: any } = useContext(MyContext);
  if (!user) {
    console.log("Error");
  }
  console.log(user);
  return <div>Dasboard</div>;
}
