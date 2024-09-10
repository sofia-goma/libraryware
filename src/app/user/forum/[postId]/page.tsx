"use client";
import Image from "next/image";
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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookmarkIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/loading";
import notfoundimage from "../../../../public/cover_not_found.jpg";
import { useMutation, useQuery } from "convex/react";
import PostUI from "@/components/shared/post-ui";
import { api } from "../../../../../convex/_generated/api";
import { getPostById } from "../../../../../convex/post";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useAuth } from "@/providers/auth-provider";
import { toast } from "react-toastify";

export default function PostId({
  params,
}: {
  params: {
    postId: Id<"post">;
  };
}) {
  const [commentContent, setCommentContent] = React.useState("");
  const post = useQuery(api.post.getPostById, { postId: params.postId });
  const router = useRouter();
  const { user } = useAuth();
  const createComment = useMutation(api.comment.createComment);

  const createCommentfunction = async (content: string) => {
    try {
      await createComment({
        postId: params.postId,
        userId: user.id,
        body: content,
      });

      toast.success("comment created successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to create the comment.");
    }
  };
  if (!post) return <Loading />;
  return (
    <TooltipProvider>
      <Button
        variant="outline"
        className="mb-2 w-full"
        onClick={() => router.back()}
      >
        Go Back
      </Button>
      <PostUI
        id={params.postId}
        body={post.body}
        userId={post.userId}
        time={post._creationTime}
        bookId={post.bookId}
        title={post.title}
      />
      <form
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
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
          <Button
            type="button"
            size="sm"
            className="ml-auto gap-1.5"
            onClick={() => createCommentfunction(commentContent)}
          >
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </TooltipProvider>
  );
}
