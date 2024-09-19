"use client";
import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { SendHorizonal } from "lucide-react";
import FormLoading from "../shared/form-loading";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface IPostComment {
  body: string;
}

function CommentInput({ post, comment }: { post: IPost; comment?: IComment }) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const createComment = useMutation(api.comment.createComment);
  const { register, handleSubmit, reset } = useForm<IPostComment>();
  const handleComment = async (data: IPostComment) => {
    const { body } = data;
    if (body.trim() === "" || body.trim().length < 3) {
      toast({
        variant: "destructive",
        description: "Please enter something in the field!",
      });
      return;
    }
    setLoading(true);
    try {
      await createComment({
        postId: post._id as Id<"post">,
        userId: user.id as Id<"users">,
        body: data.body,
        parentId: comment ? (comment._id as Id<"comment">) : undefined,
      });
      reset();
      toast({
        description: "Your comment has been posted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to post comment. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      <form onSubmit={handleSubmit(handleComment)}>
        <Input placeholder="Type a comment" {...register("body")} />
        <Button
          type="submit"
          className="p-2 absolute right-0 top-0 bg-primary rounded-tl-none rounded-bl-none "
        >
          {loading ? <FormLoading /> : <SendHorizonal className="w-6 h-6" />}
        </Button>
      </form>
    </div>
  );
}

export default CommentInput;
