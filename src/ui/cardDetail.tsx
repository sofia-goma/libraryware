import Image from "next/image";
import React from "react";

type Props = { book: any };

function CardDetail({ book }: Props) {
  return (
    <div className="flex gap-3 bg-slate-50 p-5 shadow-md rounded-md">
      <Image
        src={book.cover}
        alt={`image du livre ${book.title}`}
        width={70}
        height={70}
      />
      <div>
        <h1 className="text-xl font-medium">{book.title}</h1>
        <p className="font-extralight italic">
          {book.author.firstname + " " + book.author.name}
        </p>
        <p className="text-sm">{book.publicationYear}</p>
        <p className="text-xs">{book.category.name}</p>
        <p
          className={`text-sm pt-2 ${
            book.statut === "available"
              ? "text-lime-600"
              : book.statut === "borrowed"
              ? "text-sky-600"
              : "text-yellow-400"
          }`}
        >
          {book.statut.toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default CardDetail;
