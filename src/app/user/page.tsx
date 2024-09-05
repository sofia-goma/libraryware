"use client";
import { useEffect, useState } from "react";
import Citation from "@/components/shared/citations";
import NewBook from "@/components/shared/new-books";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/shared/loading";
import BookCard from "@/components/shared/book-card";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function loadBook() {
      // this is code is a trial for attempting to load 99 books from open library api
      // http://openlibrary.org/people/george08/lists/OL97L/seeds.json
      // /people/davidscotson/lists/OL235275L
      // const resp = await axios.get('https://openlibrary.org/collections/100-best-mystery-and-thriller-books-of-all-time.json?limit=100&has_fulltext=true');
      const resp = await axios.get(
        "https://openlibrary.org/people/davidscotson/lists/OL235275L/seeds.json"
      );
      const result = await resp.data;
      // const result = await resp.json();
      const allBooks = await result.entries;
      console.log(allBooks);
      // console.log('hello world');
      // console.log(result.docs);
      setBooks(allBooks);
    }
    loadBook();
  }, []);
  console.log(books[0]);

  return (
    <div className="flex justify-between items-start h-screen gap-4">
      {/* <Citation /> */}
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-lg font-semibold md:text-2xl">
            Recommended for you
          </h1>
          {/* <div className="">
                        <Badge>ALL</Badge>
                    </div> */}
        </div>

        <ScrollArea className="w-full h-[80vh] overflow-y-auto">
          {books.length === 0 ? (
            <div className="flex flex-wrap gap-[2%]">
              <Loading />
            </div>
          ) : (
            <div className="flex flex-wrap gap-[2%]">
              {books.map((book: any, index) => (
                <Link
                  key={index}
                  href={`/user/${book.url.replace("S", "L").replace("/works/", "")}`}
                  className="w-[30%] h-[20vh] rounded-sm shadow-xl mb-[2%] max-lg:w-[100%] max-lg:h-[15vh]"
                >
                  <BookCard
                    title={book.title}
                    cover={book?.picture?.url.replace("S.jpg", "L.jpg")}
                    date={book.last_update}
                    type={book.type}
                  />
                </Link>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
