import { toastError } from "@/lib/toast";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoIosContact } from "react-icons/io";
import { LuContact } from "react-icons/lu";

type Props = {
  title: string;
  users: {
    data: { data: unknown[] };
    isLoading: boolean;
    error: string | null;
  };
};

export default function CardUser({ users, title }: Props) {
  !users && toastError("Pas de livres");
  const {
    data,
    isLoading,
    error,
  }: { data: { data: any[] }; isLoading: boolean; error: string | null } =
    users;
  const style = "w-1/6 px-1";

  console.log(data);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-800"></div>
      </div>
    );

  if (data)
    return data.data
      .filter((el, i) => i < 3)
      .map((el) => (
        <Link
          href={`/admin/book/${el.userId}`}
          className="bg-white shadow-lg rounded-xl flex justify-between items-center p-4 my-2"
          key={el.userId}
        >
          <p className={`${style}`}>{`${el.userId.slice(0, 8)}...`}</p>
          <p className={style}>
            <IoIosContact size={50} />
          </p>
          <p className={style}>{el.name}</p>
          <p className={style}>{el.firstname}</p>
          <p
            className={`${style} flex flex-col justify-center overflow-hidden`}
          >
            <span>{el.number}</span>
            <span>{el.email}</span>
          </p>
          {title === "Overdue" ||
          title === "Borrowed" ||
          title === "Subscribe" ? (
            <p
              className={`${style} ${
                title === "Overdue" ? "text-[#F4555A]" : "text-[#2D7DC4]"
              }`}
            >
              .2days
            </p>
          ) : title === "Reserve" ? (
            <p className={`${style} `}>Annuler</p>
          ) : title === "Available" ? (
            <p className={`${style} `}>Reserve</p>
          ) : (
            <p className=""></p>
          )}
        </Link>
      ));
}
