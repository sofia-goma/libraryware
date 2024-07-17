import React from "react";
import CardBook from "./cardBook";

type Props = {};

export default function BookTab({}: Props) {
  const headers = ["ID", "Cover", "Titre", "Catégorie", "Statut", ""];
  return (
    <div className="">
      <h1 className="text-2xl font-medium">Titre du tableau</h1>
      <div className="flex justify-between px-4">
        {headers.map((header, i) => (
          <p className="text-lg font-normal w-1/6" key={i}>
            {header}
          </p>
        ))}
      </div>
      <div>
        <CardBook />
      </div>
    </div>
  );
}
