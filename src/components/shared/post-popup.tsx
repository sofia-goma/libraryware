"use client";
import { useState } from "react";
import { CirclePlus, PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function PostPopup({
  title,
  handleSubmit,
  shape,
}: {
  title: string;
  handleSubmit?: (content: string) => void;
  shape?: boolean;
}) {
  const [postContent, setPostContent] = useState(""); // State to store the input value

  const handlePost = () => {
    if (handleSubmit) {
      if (postContent.length == 0) return;
      handleSubmit(postContent);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {shape ? (
          <PlusCircleIcon className="hover:cursor-pointer" />
        ) : (
          <Button variant="default">
            <CirclePlus className="w-5 h-5 mr-2" />
            Post
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Share your insights, favorite moments, and questions with fellow
            readers.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input type="file" />
          <Textarea
            placeholder="Share your thougths"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handlePost}>
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}