import React, { useContext } from "react";
import CategoryBooks from "./category-books";
import { MyContext } from "@/lib/context";

type Props = {};

const Recomend = (props: Props) => {
  // const { books, user }: { books?: any; user?: any } = useContext(MyContext);
  // if (!books.data || !user.data) {
  //   return;
  // }
  return (
    <div>
      <h1 className="text-3xl font-semibold">Récommandés pour vous</h1>
      {
      // user.data.data.category.map((el: any, i: number) => (
      //   <CategoryBooks
      //     category={el.name}
      //     books={[...books.data.data, ...books.data.data, ...books.data.data]}
      //     key={i}
      //   />
      // ))
      }
    </div>
  );
};

export default Recomend;
