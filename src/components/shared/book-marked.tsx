import React from "react";
import BookCard from "./book-card";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookMarkedList from "./book-marked-list";
import BookCardLoader from "./book-card-loader";

type Props = { userId: Id<"users"> };

export default function Bookmarked({ userId }: Props) {
  const bookmarkedBooks = useQuery(api.bookmark.getBookmarksByUserId, {
    userId,
  });

  if (!bookmarkedBooks)
    return (
      <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-3 mb-4">
        {Array(8)
          .fill(null)
          .map((e, i) => (
            <BookCardLoader key={i} />
          ))}
      </div>
    );

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
      <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-3 mb-4">
        {bookmarkedBooks.map((e) => (
          <BookMarkedList key={e._id} bookId={e.bookId} />
        ))}
      </div>
    </ul>
  );
}
