"use client";
import {
  CornerDownLeft,
  Mic,
  Paperclip,
  Share,
  BookOpenText,
  CirclePlus,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookmarkIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/loading";
import notfoundimage from "../../../../public/cover_not_found.jpg";
import Image from "next/image";

export default function BookDetails({
  params,
}: {
  params: {
    bookId: string;
  };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState<any>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const imageURL =
    `https://covers.openlibrary.org/b/id/${params.bookId}-L.jpg` ||
    notfoundimage;
  const URL = "https://openlibrary.org/works/";
  useEffect(() => {
    async function loadBookDetails() {
      try {
        const { data } = await axios.get(
          `https://openlibrary.org/works/${params.bookId}.json`
        );
        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBookDetails();
  }, [params.bookId]);

  console.log(bookDetails);
  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <TooltipProvider>
        <Button variant="outline" className="mb-3 fixed z-20">
          <ArrowLeft className="mr-2" onClick={() => router.back()} />
          Go Back
        </Button>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row mt-5 justify-center md:gap-4 gap-12">
            <Image
              src={notfoundimage}
              className="w-full md:max-w-[500px] h-[500px] object-cover"
              alt="cover image"
            />
            <div className="flex-1 flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-3">{bookDetails?.title}</h1>
              <p className="text-secondary-foreground mb-3">
                {bookDetails?.description}
              </p>
              <p>
                <span className="font-bold mb-3">Subject Places: </span>
                {bookDetails?.subject_places}
              </p>
              <p>
                <span className="font-bold">Subjects: </span>{" "}
                {bookDetails?.subjects[0]}
              </p>

              <div className="flex items-center md:items-start mt-4 space-x-4 mb-6">
                <Button variant="outline">
                  <BookmarkIcon className="w-5 h-5 mr-2" />
                  Bookmark
                </Button>
                <Button variant="outline">
                  <BookOpenText className="w-5 h-5 mr-2" />
                  Read
                </Button>
                <Button variant="default">
                  <CirclePlus className="w-5 h-5 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        )}
      </TooltipProvider>
    </ScrollArea>
  );
}
