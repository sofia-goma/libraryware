"use client";
import { useContext } from "react";
import { MyContext } from "@/lib/context";
import BorrowedTab from "@/components/shared/borrowed-tab";


type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <BorrowedTab val={true} all={true} />
    </div>
  );
}
