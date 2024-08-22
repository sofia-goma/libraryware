"use client";

import { MyContext } from "@/lib/context";
import BookTab from "@/ui/bookTab";
import PopUp from "@/ui/popUp";
import { useContext, useState } from "react";
import { LuBookPlus } from "react-icons/lu";

type Props = {};

export default function Page({}: Props) {
  const headers = ["ID", "Cover", "Titre", "Catégorie", "Statut"];
  // const { books }: { books?: any } = useContext(MyContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const onclose = () => setShow(false);
  return (
    <div className="my-4">
      <div className="flex justify-end py-4">
        <button onClick={handleShow} title="Ajouter un livre">
          <LuBookPlus size={"30px"} />
        </button>
        <PopUp show={show} onClose={onclose} />
      </div>
      {/* <BookTab headers={headers}} /> */}
    </div>
  );
}
