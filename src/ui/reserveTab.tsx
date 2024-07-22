import React, { useContext } from "react";
import CardBook from "./cardBook";
import { MyContext } from "@/lib/context";
import BookTab from "./bookTab";
import UserTab from "./userTab";

type Props = {
  val: boolean;
};

export default function ReserveTab({ val }: Props) {
  const headers = val
    ? ["ID", "Cover", "Titre", "Catégorie", "Statut", ""]
    : ["ID", "Profile", "Nom", "Prénom", "Info", "Jours"];
  const { books, users }: { books?: any; users?: any } = useContext(MyContext);
  if (val)
    return (
      <div className="my-4">
        <BookTab title="Reserve" headers={headers} books={books} />
      </div>
    );
  else
    return (
      <div className="my-4">
        <UserTab headers={headers} title="Reserve" users={users} />
      </div>
    );
}
