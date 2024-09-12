"use client";
import { useState, useRef, FormEvent } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Id } from "../../../../convex/_generated/dataModel";
import { useToast } from "@/hooks/use-toast";
export default function MyCompoent() {
  const { toast } = useToast();
  const { handleSubmit } = useForm();
  const generateUploadURL = useMutation(api.files.generateUploadUrl);
  const createFile = useMutation(api.files.createFile);
  const imageInput = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  async function submit(event: FormEvent) {
    event.preventDefault();
    try {
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
      await createFile({
        name: "greta-thunberg-climate-activist-photo",
        fileId: storageId,
        type: "image",
        userId: "k174a5pxat12kdhhssr0963r1d70heeh" as Id<"users">,
        postId: "kd7eys5pjdc36476s0sw4md4nd70keje" as Id<"post">,
      });

      setSelectedImage(null);
      imageInput.current!.value = "";
      toast({
        title: "File Uploaded",
        description: "Now everyone can view your file",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Your file could not be uploaded. Please try again.",
      });
    }
  }
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="file"
          accept="image/*"
          ref={imageInput}
          onChange={(event) => setSelectedImage(event.target.files![0])}
          disabled={selectedImage !== null}
        />
        <Button type="submit">Upload</Button>
      </form>
    </>
  );
}
