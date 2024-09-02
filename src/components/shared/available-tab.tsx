import React, { useContext } from "react";
import { MyContext } from "@/lib/context";
import BookTab from "./book-tab";
import UserTab from "./user-tab";

type Props = {
  val: boolean;
  all: boolean;
};

export default function AvailableTab({ val, all }: Props) {
  const headers = val
    ? ["ID", "Cover", "Titre", "Catégorie", "Statut", ""]
    : ["ID", "Profile", "Nom", "Prénom", "Info", "Jours"];
  const { books, users }: { books?: any; users?: any } = useContext(MyContext);
  if (val && books.data)
    return (
      <div className="my-4">
        <BookTab title="Available" headers={headers} books={books} />
      </div>
    );
  else
    return (
      <div className="my-4">
        <UserTab headers={headers} title="Subscribe" users={users} all={all} />
      </div>
    );
}
