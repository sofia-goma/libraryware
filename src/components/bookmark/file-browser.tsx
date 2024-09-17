"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Id } from "../../../convex/_generated/dataModel";
import { Placeholder } from "./placeholder";
import { Loading } from "./loading";
import BookMarkedList from "../shared/book-marked-list";
import { Button } from "../ui/button";
import Link from "next/link";


export function FileBrowser({
  userId,
}: {
  userId: Id<"users">;
  favoritesOnly?: boolean;
  deletedOnly?: boolean;
}) {
  const bookmarkedBooks = useQuery(api.bookmark.getBookmarksByUserId, {
    userId,
  });
  const isLoading = bookmarkedBooks === undefined;
  return (
    <div className="mb-8">
      <Tabs defaultValue="grid">
        {isLoading && <Loading title="bookmarks" />}

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedBooks?.map((e) => (
              <BookMarkedList key={e._id} bookId={e.bookId} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {bookmarkedBooks?.length === 0 && (
        <Placeholder>
          {" "}
          <div className="text-2xl">Bookmark important books and revisit them anytime.</div>
          <Link href="/user">
            <Button size="lg">EXPLORE HERE</Button>
          </Link>
        </Placeholder>
      )}
    </div>
  );
}
