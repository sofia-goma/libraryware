import React from "react";
import BookCard from "./book-card";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookMarkedList from "./book-marked-list";

type Props = { userId: Id<"users"> };

export default function Bookmarked({ userId }: Props) {
  const bookmarkedBooks = useQuery(api.bookmark.getBookmarksByUserId, {
    userId,
  });

  if (!bookmarkedBooks) return;

  console.log(bookmarkedBooks);
  return (
    <ul className="flex items-center justify-center">
      {bookmarkedBooks.length === 0 && (
        <TooltipProvider>
          <div className="flex flex-col items-center gap-3 justify-center">
            <p className="text-center text-secondary-foreground leading-10 text-2xl">
              Your bookmarks are empty for now. Add books to your collection and
              revisit them anytime!
            </p>
            <Link href="/user">
              <Button size="lg">START EXPLORING</Button>
            </Link>
          </div>
        </TooltipProvider>
      )}
      {bookmarkedBooks.map((e) => (
        <BookMarkedList key={e._id} bookId={e.bookId} />
      ))}
    </ul>
  );
}
