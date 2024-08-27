"use client";

import { MyContext } from "@/lib/context";
import ReserveTab from "@/ui/reserveTab";
import { useContext } from "react";

type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <ReserveTab val={false} all />
    </div>
  );
}
