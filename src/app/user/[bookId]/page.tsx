"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import Loading from "@/components/shared/loading";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { BookmarkCheck, BookmarkIcon, BookOpenText } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { PostPopup } from "@/components/shared/post-popup";
import { useToast } from "@/hooks/use-toast";

export default function BookDetails({
  params,
}: {
  params: {
    bookId: Id<"book">;
  };
}) {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  if (!user.id) return;
  const bookDetails = useQuery(api.book.getBookById, { bookId: params.bookId });
  const createBookmark = useMutation(api.bookmark.createBookmark);
  const deleteBookmark = useMutation(api.bookmark.deleteBookmark);
  const isBookmarked = useQuery(api.bookmark.isBookmark, {
    userId: user.id,
    bookId: params.bookId,
  });

  const createPostConvex = useMutation(api.post.createPost);

  // Wait for user to be available
  if (!user || !user.id) {
    return <Loading />; // Show loading while fetching user
  }

  const bookmark = async () => {
    if (!isBookmarked) {
      try {
        await createBookmark({
          userId: user.id,
          bookId: params.bookId,
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

  const createPostfunction = async (content: string) => {
    try {
      // Call the Convex mutation to create the post
      await createPostConvex({
        userId: user.id,
        bookId: params.bookId,
        title: bookDetails?.title ? bookDetails.title : "Title to update",
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

  // handle read function
  const read = () => {};

  if (!bookDetails) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Button variant="outline" className="mb-2" onClick={() => router.back()}>
        Go Back
      </Button>
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
        <Button variant="outline">
          <BookOpenText className="w-5 h-5 mr-2" />
          Read
        </Button>
        {/* post button */}
        <PostPopup
          handleSubmit={createPostfunction}
          title={bookDetails.title}
        />
      </div>
    </TooltipProvider>
  );
}
