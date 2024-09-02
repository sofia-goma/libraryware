"use client";
import { useContext } from "react";
import { MyContext } from "@/lib/context";
import ReserveTab from "@/components/shared/reserve-tab";


type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <ReserveTab val={true} all={true} />
    </div>
  );
}
