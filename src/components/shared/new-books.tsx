import { MyContext } from "@/lib/context";
import React, { useContext } from "react";
import UserBook from "./user-book";

type Props = {};

export default function NewBook({}: Props) {
  // const { books }: { books?: any } = useContext(MyContext);
  // if (!books.data) {
  //   return;
  // }
  return (
    <div className="relative lg:flex  gap-3 items-center hidden  text-xl text-slate-100 w-[40vw] h-[25vh] rounded-3xl border-2 border-primary shadow-md">
      <div className="bg-primary h-full flex justify-center items-center rounded-l-[21px] w-12 shadow">
        <h1 className="text-2xl rotate-[-90deg]">Nouveautés</h1>
      </div>
      <div className="overflow-x-scroll scrollbar-none rounded-r-2xl scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex gap-3 h-[23vh]">
          {
          // books.data.data.reverse().map((el: any, i: number) => (
          //   <UserBook cover={el.cover} id={el.id} key={i} />
          // ))
          }
        </div>
      </div>
    </div>
  );
}
