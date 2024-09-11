"use client";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostBox from "./post-box";


function Posts() {
  const posts = useQuery(api.post.getPosts);
  const postEx = [
    {
      _id: "hjfff",
      _creationTime: 29982733,
      title: "dfjbh",
      userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
      bookId: "hjshdfsdf",
      body: "dkhfgjfkhjfnefhkwej",
    },
    {
      _id: "hjfff",
      _creationTime: 29982733,
      title: "dfjbh",
      userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
      bookId: "hjshdfsdf",
      body: "dkhfgjfkhjfnefhkwej",
    },
    {
      _id: "hjfff",
      _creationTime: 29982733,
      title: "dfjbh",
      userId: "jx7443p6h27gzxfeeyvakzr6w56zt2nr",
      bookId: "hjshdfsdf",
      body: "dkhfgjfkhjfnefhkwej",
    },
  ];
  // Replace postEx with posts
  return (
    <div className="mx-2 border-x border-t border-solid border-border">
      {postEx.length > 0 ? (
        <ScrollArea className="w-full h-[80vh] overflow-y-auto">
          {posts?.map((post, index) => (
            <PostBox post={post} key={index} />
          ))}
        </ScrollArea>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Posts;
