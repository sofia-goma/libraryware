"use client";
import PostUI from "@/components/shared/post-ui";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Forum() {
  const posts = useQuery(api.post.getPosts);
  return (
    <ScrollArea className="w-full h-[80vh] overflow-y-auto">
      <div className="">
        {posts?.map((e) => (
          <PostUI
            key={e._id}
            body={e.body}
            userId={e.userId}
            time={e._creationTime}
            bookId={e.bookId}
            title={e.title}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
