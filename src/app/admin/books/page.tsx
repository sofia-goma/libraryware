"use client";

import { MyContext } from "@/lib/context";
import BookTab from "@/ui/bookTab";
import { useContext } from "react";
import { LuBookPlus } from "react-icons/lu";

type Props = {};

export default function Page({}: Props) {
  const headers = ["ID", "Cover", "Titre", "Catégorie", "Statut"];
  const { books }: { books?: any } = useContext(MyContext);
  return (
    <div className="my-4">
      <div className="flex justify-end py-4">
        <button title="Ajouter un livre">
          <LuBookPlus size={"30px"} />
        </button>
      </div>
      <BookTab headers={headers} books={books} />
    </div>
  );
}
