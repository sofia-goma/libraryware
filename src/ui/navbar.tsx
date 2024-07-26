import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoIosContact, IoMdSearch } from "react-icons/io";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="w-screen h-[10vh] bg-[#f2f8ff] flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-black px-4">
        <span className="text-[#3c5968]">Library</span>
        <span className="text-[#574c4a]">Ware</span>
      </h1>
      <div className="rounded-[40px] w-[30%] h-8 shadow-sm flex">
        <input
          type="text"
          className="py-2 px-4 focus:outline-none w-full rounded-l-[40px] border-r border-gray-300"
          placeholder="Rechercher un livre..."
        />
        <button className=" px-4 py-2 bg-[#3c596866] rounded-r-[40px]">
          <IoMdSearch color="#574c4a" />
        </button>
      </div>
      <div className="flex items-center gap-6 mr-6">
        <FaRegBell size={"20px"} color="#574c4a" />
        <IoIosContact size={"24px"} color="#574c4a" />
      </div>
    </div>
  );
}
