"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import Loading from "@/components/shared/loading";
import { api } from "../../../../convex/_generated/api";
// import { Button } from "@/components/ui/button";
import { CirclePlus, BookmarkIcon, BookOpenText } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import { useAuth } from "@/providers/auth-provider";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PostPopup } from "@/components/shared/post-popup";
export default function BookDetails({
  params,
}: {
  params: {
    bookId: string | any;
  };
}) {
  const { user } = useAuth();
  const router = useRouter();
  const bookDetails = useQuery(api.book.getBookById, { bookId: params.bookId });
  const createBookmark = useMutation(api.bookmark.createBookmark);
  const bookmark = async () => {
    try {
      await createBookmark({
        userId: user.id,
        bookId: params.bookId,
      });
      toast.success("Book marked!");
    } catch (error: any) {
      toast.error(error.message || "Failed to bookmark the book.");
      // console.error("Error bookmarking the book:", error);
    }
  };
  // this function is a book is bookmark
  const isBookmarked = useQuery(api.bookmark.isBookmark, {
    userId: user.id,
    bookId: params.bookId,
  });

  // handle read function
  const read = () => {};

  // handle post function

  const post = () => {
    console.log("post function");
  };

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
          <BookmarkIcon className="w-5 h-5 mr-2" />
          Bookmark
        </Button>
        <Button variant="outline">
          <BookOpenText className="w-5 h-5 mr-2" />
          Read
        </Button>
        {/* post button */}
        <PostPopup title={bookDetails.title} />
      </div>
    </TooltipProvider>
  );
}
