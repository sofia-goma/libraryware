import useAxios from "@/lib/axios.fetch";
import { MyContext } from "@/lib/context";
import { toastError } from "@/lib/toast";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {};

export default function CardBook({}: Props) {
  const { books }: { books?: any } = useContext(MyContext);
  !books && toastError("Pas de livres");
  const {
    data,
    isLoading,
    error,
  }: { data: { data: any[] }; isLoading: boolean; error: string | null } =
    books;
  const style = "w-1/6 px-1";
  if (data)
    return data.data.map((el, i) => (
      <div
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
        <p className={style}>.2days</p>
      </div>
    ));
}
