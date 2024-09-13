"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, BookmarkCheck, BookOpenText } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useAuth } from "@/providers/auth-provider";
import { PostPopup } from "./post-popup";
import { useToast } from "@/hooks/use-toast";

export default function BookCard({
  id,
  author,
  title,
  cover,
  href,
  openLibraryId,
}: IBookCard) {
  const { user } = useAuth();
  const { toast } = useToast();
  const createBookmark = useMutation(api.bookmark.createBookmark);
  const deleteBookmark = useMutation(api.bookmark.deleteBookmark);
  const isBookmarked = useQuery(api.bookmark.isBookmark, {
    userId: user.id,
    bookId: id,
  });

  const bookmark = async () => {
    if (!isBookmarked) {
      try {
        await createBookmark({
          userId: user.id,
          bookId: id,
        });
        toast({
          title: "Bookmark Added",
          description: "You have successfully added a new bookmark.",
        });
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Failed to bookmark the book.",
          description: "An error occurred while deleting the bookmark.",
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
          description: "You have successfully removed a new bookmark.",
        });
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Failed to remove bookmark",
          description: "An error occurred while removing the bookmark.",
        });
      }
    }
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const createPostConvex = useMutation(api.post.createPost);

  const createPostfunction = async (content: string) => {
    try {
      // Call the Convex mutation to create the post
      await createPostConvex({
        userId: user.id,
        bookId: id,
        title: title,
        body: content,
      });

      toast({
        title: "Post Created",
        description: "Your post has been created successfully and is now live.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Failed to create the post! Please try again.",
      });
    }
  };
  return (
    <Card className="w-[250px] p-0 m-0">
      <CardHeader className="p-4 text-center">
        <Link href={href}>
          <CardTitle className="text-sm hover:text-primary transition-colors h-5 overflow-hidden">
            {title}
          </CardTitle>
        </Link>
        <CardDescription>
          <span className="text-xs">
            <span className="font-bold">Author: </span>
            {author}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0 flex items-center justify-center">
        <Link href={href}>
          <Image
            src={`${cover ? `${cover}` : `/cover_not_found.jpg`}`}
            width={150}
            height={150}
            className="object-cover"
            alt="book card image"
          />
        </Link>
      </CardContent>
      <CardFooter className="pb-0 flex items-center justify-center gap-3 py-2">
        <Link
          target="_blank"
          href={`https://openlibrary.org/books/${openLibraryId}`}
        >
          <BookOpenText className="hover:cursor-pointer" />
        </Link>
        <PostPopup
          bookId={id}
          handleSubmit={createPostfunction}
          title={title}
        />
        <div className="" onClick={bookmark}>
          {!isBookmarked ? (
            <Bookmark className="hover:cursor-pointer" />
          ) : (
            <BookmarkCheck className="hover:cursor-pointer" color="blue" />
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
