import { toastError } from "@/lib/toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

type Props = {
  title?: string;
  books: {
    data: { data: unknown[] };
    isLoading: boolean;
    error: string | null;
  };
};

export default function CardBook({ books, title }: Props) {
  !books && toastError("Pas de livres");
  const router = useRouter();
  const {
    data,
    isLoading,
    error,
  }: { data: { data: any[] }; isLoading: boolean; error: string | null } =
    books;
  const style = "w-1/6 px-1";
  // if (error && error.includes("401")) {
  //   router.push("/login");
  //   toastError("Vous devez vous connecter pour accéder à cette page");
  //   return;
  // }
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-800"></div>
      </div>
    );

  if (data)
    return data.data.reverse().map((el, i) => (
      <Link
        href={`#`}
        className="bg-white shadow-lg rounded-xl flex justify-between items-center p-4 my-2"
        key={i}
      >
        <p className={style}>{el.code}</p>
        <p className={style}>
          <Image src={el.cover} alt="" width={40} height={40} />
        </p>
        <p className={style}>{el.title}</p>
        <p className={style}>{el.category.name}</p>
        <p className={style}>{el.statut}</p>
        {title === "Overdue" || title === "Borrowed" ? (
          <p
            className={`${style} ${
              title === "Overdue" ? "text-[#F4555A]" : ""
            }${title === "Borrowed" ? "text-[#2D7DC4]" : ""}`}
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
