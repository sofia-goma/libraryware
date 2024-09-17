/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookCard from "@/components/shared/book-card";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Loading } from "@/components/bookmark/loading";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("search") || "";

  const { results, status, loadMore, isLoading } = search
    ? usePaginatedQuery(
      api.search.searchBooks,
      { searchQuery: search },
      { initialNumItems: 10 }
    )
    : usePaginatedQuery(api.book.getAllBooks, {}, { initialNumItems: 12 });

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-lg font-semibold md:text-2xl">
            {search ? `Search Result for ${search}` : "Recommended for you"}
          </h1>
        </div>
        <ScrollArea className="w-full h-[80vh] overflow-y-auto">
          <Tabs defaultValue="grid">
            {isLoading && <Loading title="books" />}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results?.map(
                  ({ _id, title, author, coverUrl, openLibraryId }) => (
                    <BookCard
                      key={_id}
                      id={_id}
                      href={`/user/${_id}`}
                      title={title}
                      cover={coverUrl || ""}
                      author={author}
                      openLibraryId={openLibraryId}
                    />
                  )
                )}
              </div>
            </TabsContent>
            <div className="flex my-6 items-center justify-center">
              {!isLoading && (
                <Button
                  onClick={() => loadMore(8)}
                  disabled={status !== "CanLoadMore"}
                >
                  Load More
                </Button>
              )}
            </div>
          </Tabs>
        </ScrollArea>
      </div>
    </div>
  );
}
