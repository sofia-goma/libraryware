"use client";

import AvailableTab from "@/ui/availableTab";
import BorrowedTab from "@/ui/borrowedTab";
import OverdueTab from "@/ui/overdueTab";
import ReserveTab from "@/ui/reserveTab";
import Statistique from "@/ui/statistique";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="mx-[5%] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <Statistique books={true} />
      <OverdueTab val={true} all={false} />
      <BorrowedTab val={true} all={false} />
      <ReserveTab val={true} all={false} />
      <AvailableTab val={true} all={false} />
    </div>
  );
}
