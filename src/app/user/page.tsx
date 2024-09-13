"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookCard from "@/components/shared/book-card";
import BookCardLoader from "@/components/shared/book-card-loader";

export default function Dashboard() {
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.book.getAllBooks,
    {},
    { initialNumItems: 10 }
  );
  return (
    <div className="flex justify-between items-start  h-screen gap-4">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-lg font-semibold md:text-2xl">
            Recommended for you
          </h1>
        </div>
        <ScrollArea className="w-full h-[80vh] overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-3 mb-4">
              {Array(8)
                .fill(null)
                .map((e, i) => (
                  <BookCardLoader key={i} />
                ))}
            </div>
          ) : (
            <div className="">
              <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-3 mb-4">
                {results?.map(({ _id, title, author, coverUrl }) => (
                  <BookCard
                    key={_id}
                    id={_id}
                    href={`/user/${_id}`}
                    title={title}
                    cover={coverUrl || ""}
                    author={author}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center py-4 pb-6 w-full">
                <button
                  className="h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => loadMore(8)}
                  disabled={status !== "CanLoadMore"}
                >
                  Load More
                </button>
              </div>
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
