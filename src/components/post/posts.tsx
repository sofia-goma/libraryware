"use client";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostBox from "./post-box";

function Posts() {
  const posts = useQuery(api.post.getPosts);
  if (!posts) return;
  return (
    <div className="mx-2 border-x border-t border-solid border-border">
      {posts.length > 0 ? (
        <ScrollArea className="w-full h-[80vh] overflow-y-auto">
          {posts?.map((post, index) => <PostBox post={post} key={index} />)}
        </ScrollArea>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Posts;
