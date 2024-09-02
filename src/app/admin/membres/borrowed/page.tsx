"use client";

import { MyContext } from "@/lib/context";
import BorrowedTab from "@/components/shared/borrowed-tab";
import { useContext } from "react";

type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <BorrowedTab val={false} all={true} />
    </div>
  );
}
