import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoIosContact, IoMdSearch } from "react-icons/io";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="w-screen h-14 bg-[#F5F5F5] flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-black px-4">
        <span className="text-[#F4555A]">Library</span>
        <span className="text-[#2D7DC4]">Ware</span>
      </h1>
      <div className="bg-white rounded-[40px] w-[30%] h-8 shadow-sm flex">
        <input
          type="text"
          className="py-2 px-4 focus:outline-none w-full rounded-l-[40px] border-r border-gray-300"
          placeholder="Rechercher un livre..."
        />
        <button className=" px-4 py-2 text-white hover:bg-[#F4555A]">
          <IoMdSearch color="#F4555A" />
        </button>
      </div>
      <div className="flex items-center gap-6 mr-6">
        <FaRegBell size={"20px"} />
        <IoIosContact size={"24px"} />
      </div>
    </div>
  );
}
