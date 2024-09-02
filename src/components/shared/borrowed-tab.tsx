import React, { useContext } from "react";
import CardBook from "./card-book";
import { MyContext } from "@/lib/context";
import BookTab from "./book-tab";
import UserTab from "./user-tab";

type Props = { val: boolean; all: boolean };

export default function BorrowedTab({ val, all }: Props) {
  const headers = val
    ? ["ID", "Cover", "Titre", "Catégorie", "Statut", "Jours"]
    : ["ID", "Profile", "Nom", "Prénom", "Info", "Jours"];
  const { books, users }: { books?: any; users?: any } = useContext(MyContext);
  if (val)
    return (
      <div className="my-4">
        <BookTab title="Borrowed" headers={headers} books={books} />
      </div>
    );
  else
    return (
      <div className="my-4">
        <UserTab headers={headers} title="Borrowed" users={users} all={all} />
      </div>
    );
}
