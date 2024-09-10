import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Forward, ThumbsUp, MessagesSquare } from "lucide-react";
import getFormattedInitials from "@/lib/get-formatted-initials";
import CommentInput from "./comment-input";
import Comments from "./comments";

const PostBox = ({ post }: { post: IPost }) => {
  const user = useQuery(api.user.getUser, {
    userId: post.userId as Id<"users">,
  });
  return (
    <div className="bg-white w-full border-b border-solid border-gray-300 p-4 mb-4">
      <div className="flex items-center space-x-4">
        <Avatar className="inline-block w-16 h-16 static">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>
            {getFormattedInitials(user?.image || "A")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <span className="block text-sm font-medium text-gray-900">
            Jonathan Burke Jr.
          </span>
          <span className="text-xs text-gray-500">
            Shared publicly - 7:30 PM today
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400">
          <i className="fas fa-times"></i>
        </Button>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        Lorem ipsum represents a long-held tradition for designers,
        typographers, and the like. Some people hate it and argue for its
        demise, but others ignore the hate as they create awesome tools to help
        create filler text for everyone from bacon lovers to Charlie Sheen fans.
      </p>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <Button
            variant="link"
            className="text-gray-500 flex justify-center items-center gap-1"
          >
            <Forward className="w-4 h-4" /> Share
          </Button>
          <Button
            variant="link"
            className="text-gray-500 flex justify-center items-center gap-1"
          >
            <ThumbsUp className="w-4 h-4" /> Like
          </Button>
        </div>
        <Button variant="link">
          <Drawer>
            <DrawerTrigger className="text-gray-500 flex justify-center items-center gap-1">
              <MessagesSquare className="w-4 h-4" /> Comments (5)
            </DrawerTrigger>
            <DrawerContent className="w-full md:w-3/4 mlg:w-1/2 md:left-[20%] mlg:left-[25%] p-4">
              <DrawerHeader>
                <DrawerTitle>Post title?</DrawerTitle>
                <DrawerDescription>Post description</DrawerDescription>
              </DrawerHeader>
              <ScrollArea className="w-full h-[300px] overflow-y-auto">
                <Comments post={post} />
              </ScrollArea>
              <CommentInput post={post} />
              <DrawerFooter className="self-start p-0 pt-2">
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Button>
      </div>
      <CommentInput post={post} />
    </div>
  );
};

export default PostBox;
