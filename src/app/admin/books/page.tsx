"use client";
import { useState } from "react";
import BookTab from "@/components/shared/book-tab";
import Popup from "@/components/shared/pop-up";
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
        {/* <PopUp show={show} onClose={onclose} /> */}
      </div>
      {/* <BookTab headers={headers}} /> */}
    </div>
  );
}
