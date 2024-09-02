"use client";
import AvailableTab from "@/components/shared/available-tab";
import BorrowedTab from "@/components/shared/borrowed-tab";
import OverdueTab from "@/components/shared/overdueTab";
import ReserveTab from "@/components/shared/reserve-tab";
import Statistique from "@/components/shared/statistique";
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
