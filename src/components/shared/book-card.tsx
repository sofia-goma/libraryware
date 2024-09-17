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
import { BookOpenText, StarIcon } from "lucide-react";
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
  const createPostConvex = useMutation(api.post.createPost);
  const createPostfunction = async (content: string) => {
    try {
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
    <Card>
      <CardHeader className="relative">
        <Link href={href}>
          <CardTitle className="flex gap-2 text-xl font-semibold hover:text-primary transition-colors">
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
      <CardContent className="h-[200px] flex justify-center items-center">
        <Link href={href}>
          <Image
            src={`${cover ? `${cover}` : `/cover_not_found.jpg`}`}
            className="w-[150px] hover:scale-105 transition-all"
            width={100}
            height={100}
            alt="book card image"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
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
            <StarIcon className="hover:cursor-pointer" />
          ) : (
            <StarIcon
              className="hover:cursor-pointer"
              color="yellow"
              fill="yellow"
            />
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
