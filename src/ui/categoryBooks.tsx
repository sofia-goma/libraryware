import React from "react";
import UserBook from "./userBook";

type Props = {
  category: string;
  books: any[];
};

function CategoryBooks({ category, books }: Props) {
  return (
    <div>
      <h2 className="text-xl font-medium py-2">{`${category}`}</h2>
      <div className="overflow-x-scroll scrollbar-none scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex h-[30vh] gap-4">
          {books.reverse().map((el, i) => (
            <UserBook cover={el.cover} id={el.id} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBooks;
