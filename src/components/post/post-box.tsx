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
import socialDate from '@/lib/social-date';

const PostBox = ({ post }: { post: IPost }) => {
  const user = useQuery(api.user.getUser, {
    userId: post.userId as Id<"users">,
  });
  const allComents = useQuery(api.comment.getCommentsByPost, {
    postId: post._id as Id<"post">,
  });
  return (
    <div className="bg-background w-full border-b border-solid border-border p-4 mb-4">
      <div className="flex items-center space-x-4">
        <Avatar className="inline-block w-16 h-16 static">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>
            {getFormattedInitials(user?.image || "A")}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <span className="block text-sm font-medium text-foreground">
            {user?.name}
          </span>
          <span className="text-xs text-secondary-foreground">
            Shared publicly - {socialDate(post._creationTime)}
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-secondary-foreground">
          <i className="fas fa-times"></i>
        </Button>
      </div>

      <p className="mt-3 text-sm text-foreground">{post.body}</p>

      <div className="flex items-center justify-between mt-4 text-sm text-secondary-foreground">
        <div className="flex items-center gap-3">
          <Button
            variant="link"
            className="text-secondary-foreground flex justify-center items-center gap-1"
          >
            <Forward className="w-4 h-4" /> Share
          </Button>
          <Button
            variant="link"
            className="text-secondary-foreground flex justify-center items-center gap-1"
          >
            <ThumbsUp className="w-4 h-4" /> Like
          </Button>
        </div>
        <Button variant="link">
          <Drawer>
            <DrawerTrigger className="text-secondary-foreground flex justify-center items-center gap-1">
              <MessagesSquare className="w-4 h-4" /> Comments (
              {allComents?.length || 0})
            </DrawerTrigger>
            <DrawerContent className="w-full md:w-3/4 mlg:w-1/2 md:left-[20%] mlg:left-[25%] p-4">
              <DrawerHeader>
                <DrawerTitle>{post.title}</DrawerTitle>
                <DrawerDescription>{post.body}</DrawerDescription>
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
