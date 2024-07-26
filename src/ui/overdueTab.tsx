import React, { useContext } from "react";
import BookTab from "./bookTab";
import { MyContext } from "@/lib/context";
import UserTab from "./userTab";

type Props = {
  val: boolean;
  all: boolean;
};

export default function OverdueTab({ val, all }: Props) {
  const headers = val
    ? ["ID", "Cover", "Titre", "Catégorie", "Statut", "Jours"]
    : ["ID", "Profile", "Nom", "Prénom", "Info", "Jours"];
  const { books, users }: { books?: any; users?: any } = useContext(MyContext);
  if (val)
    return (
      <div className="my-4">
        <BookTab headers={headers} title="Overdue" books={books} />
      </div>
    );
  else
    return (
      <div className="my-4">
        <UserTab headers={headers} title="Overdue" users={users} all={all} />
      </div>
    );
}
