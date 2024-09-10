"use client";
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
import {
  BookAudioIcon,
  BookAIcon,
  PlusCircleIcon,
  BookmarkPlus,
  BookmarkMinus,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "react-toastify";
import { useAuth } from "@/providers/auth-provider";

export default function BookCard({
  id,
  author,
  title,
  cover,
  href,
}: IBookCard) {
  const { user } = useAuth();
  console.log(id);
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
        toast.success("Book marked!");
      } catch (error: any) {
        toast.error(error.message || "Failed to bookmark the book.");
      }
    }
    if (isBookmarked) {
      try {
        await deleteBookmark({
          bookmarkId: isBookmarked._id,
        });
        toast.success("Remove Bookmark!");
      } catch (error: any) {
        toast.error(error.message || "Failed to bookmark the book.");
      }
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
        <BookAIcon className="hover:cursor-pointer" color="blue" />
        <PlusCircleIcon className="hover:cursor-pointer" />
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
