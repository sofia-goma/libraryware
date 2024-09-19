"use client";
import { useState, useRef, FormEvent } from "react";
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/providers/auth-provider";
import { Loader2 } from "lucide-react";

export function PostPopup({
  title,
  bookId,
  picture
}: {
  title: string;
  handleSubmit?: (content: string) => void;
  shape?: boolean;
  bookId?: string;
  picture: string;
}) {
  const { toast } = useToast();
  const { user } = useAuth();
  const createPostConvex = useMutation(api.post.createPost);
  const createNotiConvex = useMutation(api.notification.createNotification);
  const generateUploadURL = useMutation(api.files.generateUploadUrl);
  const createFile = useMutation(api.files.createFile);
  const imageInput = useRef<HTMLInputElement>(null);

  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (
        postContent.trim() === "" ||
        !postContent ||
        postContent.length < 15
      ) {
        toast({
          variant: "destructive",
          title: "Content Required",
          description: "Please enter a content with at least 15 characters.",
        });
        setLoading(false);
        return;
      }

      if (
        !selectedImage ||
        selectedImage === null ||
        selectedImage === undefined
      ) {
        // Create post
        await createPostConvex({
          userId: user.id as Id<"users">,
          bookId: bookId as Id<"book">,
          title: title ? title : "Title to update",
          body: postContent,
          picture: picture ?? "",
          pictureId: null || "",
        });

        // Create notification
        await createNotiConvex({
          userId: user.id as Id<"users">,
          message: `New post created ${title ? "for " + title : ""}`,
        });

        toast({
          title: "Post Created",
          description:
            "Your post has been created successfully and is now live.",
        });
        setOpen(false);
        return;
      }

      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadURL();
      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage!.type },
        body: selectedImage,
      });
      const { storageId } = await result.json();
      // Step 3: Save the newly allocated storage id to the database
      const file = await createFile({
        name: `${title}-photo`,
        fileId: storageId as Id<"_storage">,
        type: "image",
      });

      // Create post
      await createPostConvex({
        userId: user.id as Id<"users">,
        bookId: bookId as Id<"book">,
        title: title ? title : "Title to update",
        body: postContent,
        picture: file || "",
        pictureId: storageId as string,
      });

      // Create notification
      await createNotiConvex({
        userId: user.id as Id<"users">,
        message: `New post created ${title ? "for " + title : ""}`,
      });

      toast({
        title: "Post Created",
        description: "Your post has been created successfully and is now live.",
      });

      setSelectedImage(null);
      imageInput.current!.value = "";
      setOpen(false);
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Your file could not be uploaded. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusCircleIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Share your insights, favorite moments, and questions with fellow
            readers.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 py-4">
          <Input
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={(event) => setSelectedImage(event.target.files![0])}
            disabled={selectedImage !== null || loading} // Disable input while loading
          />
          <Textarea
            placeholder="Share your thoughts"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            disabled={loading}
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "POST TO FORUM"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
