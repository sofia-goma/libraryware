"use client";
import React, { useState, useRef } from "react";
import { useAuth } from "@/providers/auth-provider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { SendHorizonal } from "lucide-react";
import FormLoading from "../shared/FormLoading";

function CommentInput({ post, comment }: { post: IPost; comment?: IComment }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const createComment = useMutation(api.comment.createComment);
  //We'll use react hook form tomorrow
  const inputRef = useRef<HTMLInputElement>(null);

  const handleComment = async () => {
    setLoading(true);
    try {
      const comId = await createComment({
        postId: post._id as Id<"post">,
        userId: user.id as Id<"users">,
        body: "Let's jus put a test here",
        parentId: comment ? (comment._id as Id<"comment">) : undefined,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      <Input placeholder="Type a comment" ref={inputRef} />
      <Button
        onClick={handleComment}
        className="p-2 absolute right-0 top-0 bg-primary rounded-tl-none rounded-bl-none "
      >
        {loading ? <FormLoading /> : <SendHorizonal className="w-6 h-6" />}
      </Button>
    </div>
  );
}

export default CommentInput;
