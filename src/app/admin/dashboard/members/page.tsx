"use client";

import AvailableTab from "@/ui/availableTab";
import BorrowedTab from "@/ui/borrowedTab";
import OverdueTab from "@/ui/overdueTab";
import ReserveTab from "@/ui/reserveTab";
import Statistique from "@/ui/statistique";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="mx-[5%] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <Statistique books={false} />
      <OverdueTab val={false} all={false} />
      <BorrowedTab val={false} all={false} />
      <ReserveTab val={false} all={false} />
      <AvailableTab val={false} all={false} />
    </div>
  );
}
