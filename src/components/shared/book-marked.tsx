import React from "react";
import Image from "next/image";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookMarkedList from "./book-marked-list";
import BookCardLoader from "./book-card-loader";
import { UploadButton } from "../bookmark/upload-button";
type Props = { userId: Id<"users"> };

export default function Bookmarked({ userId }: Props) {
  const bookmarkedBooks = useQuery(api.bookmark.getBookmarksByUserId, {
    userId,
  });

  if (!bookmarkedBooks)
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <BookCardLoader key={i} />
          ))}
      </div>
    );

  return (
    <ul className="flex flex-col gap-8 w-full items-center mt-24">
      {bookmarkedBooks.length === 0 && (
        <TooltipProvider>
          <div className="flex flex-col items-center gap-3 justify-center">
            <UploadButton />
            <Image
              alt="an image of a picture and directory icon"
              width="300"
              height="300"
              src="/empty.svg"
            />
            <div className="text-2xl">You have no files, upload one now  Your bookmarks are empty for now. Add books to your collection and
            revisit them anytime!</div>
            <Link href="/user">
              <Button size="lg">START EXPLORING</Button>
            </Link>
          </div>
        </TooltipProvider>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkedBooks.map((e) => (
          <BookMarkedList key={e._id} bookId={e.bookId} />
        ))}
      </div>
    </ul>
  );
}
