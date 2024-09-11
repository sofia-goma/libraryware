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
import { useForm } from "react-hook-form";

interface IPostComment {
  body: string;
}

function CommentInput({ post, comment }: { post: IPost; comment?: IComment }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const createComment = useMutation(api.comment.createComment);
  //We'll use react hook form tomorrow
  const inputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit } = useForm<IPostComment>();
  const handleComment = async (data: IPostComment) => {
    setLoading(true);
    // console.log(data.body);
    try {
      await createComment({
        postId: post._id as Id<"post">,
        userId: user.id as Id<"users">,
        body: data.body,
        parentId: comment ? (comment._id as Id<"comment">) : undefined,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      <form onSubmit={handleSubmit(handleComment)}>
        <Input
          placeholder="Type a comment"
          // ref={inputRef}
          {...register("body")}
        />
        <Button
          type="submit"
          // onClick={handleComment}
          className="p-2 absolute right-0 top-0 bg-primary rounded-tl-none rounded-bl-none "
        >
          {loading ? <FormLoading /> : <SendHorizonal className="w-6 h-6" />}
        </Button>
      </form>
    </div>
  );
}

export default CommentInput;
