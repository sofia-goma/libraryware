"use client";

import { MyContext } from "@/lib/context";
import OverdueTab from "@/ui/overdueTab";
import { useContext } from "react";

type Props = {};

export default function Page({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <OverdueTab val={false} all={true} />
    </div>
  );
}
