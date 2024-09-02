"use client";
import { MyContext } from "@/lib/context";
import AvailableTab from "@/components/shared/available-tab";
import { useContext } from "react";

type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <AvailableTab val={false} all />
    </div>
  );
}
