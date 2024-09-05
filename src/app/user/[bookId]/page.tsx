"use client";
import {
  CornerDownLeft,
  Mic,
  Paperclip,
  Share,
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

export default function BookDetails({
  params,
}: {
  params: {
    bookId: string;
  };
}) {
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState<any>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

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

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Save bookmark status to local storage or backend
  };

  const handleReadStatus = () => {
    setIsRead(!isRead);
    // Update read status in local storage or backend
  };

  const handleShare = () => {
    // Sharing functionality
    const url = window.location.href;
    navigator.share
      ? navigator.share({ title: bookDetails?.title, url })
      : alert("Sharing not supported");
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const router = useRouter();

  return (
    <ScrollArea className="h-[85vh] w-full">
      <TooltipProvider>
        <ArrowLeft
          className="transition transform hover:scale-150 hover:shadow-lg"
          onClick={() => router.back()}
        />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-semibold">Loading...</h1>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{bookDetails?.title}</h1>
            <p className="text-gray-700 mb-2">{bookDetails?.description}</p>
            <p className="text-gray-600 mb-2">
              Author:{" "}
              {bookDetails?.authors
                ?.map((author: any) => author.name)
                .join(", ")}
            </p>
            <p className="text-gray-600 mb-6">
              First Published: {bookDetails?.first_publish_date}
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <Button
                onClick={handleBookmark}
                variant="outline"
                className={`flex items-center gap-2 ${isBookmarked ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}
              >
                <BookmarkIcon className="w-5 h-5" />
                {isBookmarked ? "Remove Bookmark" : "Bookmark"}
              </Button>
              <Button
                onClick={handleReadStatus}
                variant="outline"
                className={`flex items-center gap-2 ${isRead ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
              >
                {isRead ? "Read" : "Mark as Read"}
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex items-center gap-2 bg-gray-100 text-gray-700"
              >
                <Share className="w-5 h-5" /> Share
              </Button>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Comments</h2>
              <ul className="space-y-2 mb-4">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    {comment}
                  </li>
                ))}
              </ul>

              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </TooltipProvider>
    </ScrollArea>
  );
}
