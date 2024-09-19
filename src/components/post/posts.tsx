"use client";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostBox from "./post-box";
import PostBoxSkeleton from "./post-box-skeleton";
import { Placeholder } from "../bookmark/placeholder";
export default function Posts() {
  const posts = useQuery(api.post.getPosts);
  const isLoading = posts === undefined;

  return (
    <div className="border-x border-t border-solid border-border">
      {isLoading ? (
        // Show loading skeletons when posts are still loading
        <ScrollArea className="w-full h-[90vh] lg:h-[85vh] overflow-y-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <PostBoxSkeleton key={index} />
          ))}
        </ScrollArea>
      ) : (
        <>
          {posts?.length > 0 ? (
            <ScrollArea className="w-full h-[90vh] lg:h-[85vh] overflow-y-auto">
              {posts?.map((post, index) => <PostBox post={post} key={index} />)}
            </ScrollArea>
          ) : (
            <Placeholder>
              <p className="text-center py-4">No posts available</p>
            </Placeholder>
          )}
        </>
      )}
    </div>
  );
}
