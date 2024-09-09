'use client';
import { ScrollArea } from "@/components/ui/scroll-area";
import Loading from "@/components/shared/loading";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookCard from "@/components/shared/book-card";

export default function Dashboard() {
  const books = useQuery(api.book.getAllBooks);
  return (
    <div className="flex justify-between items-start h-screen gap-4">
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
          {books?.length === 0 || !books ? (
            <div className="flex mx-auto justify-items-center w-[100%]">
              <Loading />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-3 mb-4">
              {books?.map(({ openLibraryId, _id, title, author, coverUrl }) => (
                <BookCard
                  key={_id}
                  href={`/user/${_id}`}
                  title={title}
                  cover={coverUrl || ''}
                  author={author}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
