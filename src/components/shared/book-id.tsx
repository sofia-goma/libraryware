import Image from "next/image";
import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Loading from "./loading";
import { Button } from "../ui/button";
import { BookmarkCheck, BookmarkIcon, BookOpenText } from "lucide-react";
import Link from "next/link";
import { PostPopup } from "./post-popup";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  userId: Id<"users">;
  bookId: Id<"book">;
};

export default function BookId({ userId, bookId }: Props) {
  const { toast } = useToast();

  const bookDetails = useQuery(api.book.getBookById, { bookId: bookId });

  const createBookmark = useMutation(api.bookmark.createBookmark);

  const deleteBookmark = useMutation(api.bookmark.deleteBookmark);

  const isBookmarked = useQuery(api.bookmark.isBookmark, {
    userId: userId,
    bookId: bookId,
  });

  const createPostConvex = useMutation(api.post.createPost);
  const createNotiConvex = useMutation(api.notification.createNotification);

  const bookmark = async () => {
    if (!isBookmarked) {
      try {
        await createBookmark({
          userId: userId,
          bookId: bookId,
        });
        toast({
          title: "Bookmark Added",
          description: "You have successfully added a new bookmark.",
        });
      } catch {
        toast({
          variant: "destructive",
          title: "Bookmark Deleted",
          description: "You have successfully deleted the bookmark.",
        });
      }
    }
    if (isBookmarked) {
      try {
        await deleteBookmark({
          bookmarkId: isBookmarked._id,
        });
        toast({
          title: "Bookmark removed",
          description: "You have successfully deleted bookmark.",
        });
      } catch {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Failed to delete bookmark! Please try again.",
        });
      }
    }
  };

  // const createPostfunction = async (content: string) => {
  //   try {
  //     // Call the Convex mutation to create the post
  //     await createPostConvex({
  //       userId: userId,
  //       bookId: bookId,
  //       title: bookDetails?.title ? bookDetails.title : "Title to update",
  //       body: content,
  //     });

  //     await createNotiConvex({
  //       userId: userId,
  //       message: `New post created ${bookDetails?.title ? "for " + bookDetails?.title : ""}`,
  //     });

  //     toast({
  //       title: "Post Created",
  //       description: "Your post has been created successfully and is now live.",
  //     });
  //   } catch {
  //     toast({
  //       variant: "destructive",
  //       title: "Something went wrong",
  //       description: "Failed to create the post! Please try again.",
  //     });
  //   }
  //   if (isBookmarked) {
  //     try {
  //       await deleteBookmark({
  //         bookmarkId: isBookmarked._id,
  //       });
  //       toast({
  //         title: "Bookmark removed",
  //         description: "You have successfully deleted bookmark.",
  //       });
  //     } catch {
  //       toast({
  //         variant: "destructive",
  //         title: "Something went wrong",
  //         description: "Failed to delete bookmark! Please try again.",
  //       });
  //     }
  //   }
  // };

  if (!bookDetails) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <ScrollArea className="w-full h-[80vh] overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-center md:gap-4 gap-12">
        <Image
          src={bookDetails?.coverUrl || "/cover_not_found.jpg"}
          width={200}
          height={200}
          className="object-cover"
          alt="cover image"
        />
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{bookDetails.title}</h1>
          <p className="text-secondary-foreground mb-3">{bookDetails.author}</p>
          <p>
            <span className="font-bold mb-3">Description: </span>
            {bookDetails.description}
          </p>
        </div>
      </div>
      <div className="flex items-center md:items-start mt-4 space-x-4 mb-6">
        <Button
          variant={isBookmarked ? "secondary" : "outline"}
          onClick={bookmark}
        >
          {!isBookmarked ? (
            <BookmarkIcon className="w-5 h-5 mr-2" />
          ) : (
            <BookmarkCheck className="w-5 h-5 mr-2" color="blue" />
          )}
          Bookmark
        </Button>
        <Link
          target="_blank"
          href={`https://openlibrary.org/books/${bookDetails.openLibraryId}`}
        >
          <Button variant="outline">
            <BookOpenText className="w-5 h-5 mr-2" />
            Read
          </Button>
        </Link>
        {/* post button */}
        <PostPopup title={bookDetails.title} bookId={bookDetails._id} />
      </div>
    </ScrollArea>
  );
}
