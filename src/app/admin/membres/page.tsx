"use client";

import { MyContext } from "@/lib/context";
import BookTab from "@/ui/bookTab";
import UserTab from "@/ui/userTab";
// import { useContext } from "react";
import { LuBookPlus } from "react-icons/lu";

type Props = {};

export default function Page({}: Props) {
  const headers = ["ID", "Profile", "Nom", "Prenom", "Info"];
  // const { users }: { users?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      {/* <button  className="relative right-0"></button>

      <UserTab headers={headers} users={users} all={true} /> */}
    </div>
  );
}
