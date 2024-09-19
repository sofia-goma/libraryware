"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import socialDate from "@/lib/social-date";
import { Download, FileText, Trash2, Loader2 } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";
import PdfIcon from "../icons/pdf";
import Word from "../icons/word";
import CsvIcon from "../icons/csv";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "@/hooks/use-toast";

export function FileCard({
  id,
  userId,
  title,
  type,
  date,
  file,
  collectionId,
}: {
  file?: string;
  id: Id<"_storage">;
  userId: Id<"users">;
  title?: string;
  type?: "image" | "text" | "word" | "csv" | "pdf";
  date?: number;
  openLibraryId?: string;
  collectionId: Id<"collections">;
}) {
  const moveToTrashConvex = useMutation(api.collections.moveToTrash);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  const handleDownload = async () => {
    setLoadingIndicator(true);
    try {
      if (file) {
        const response = await fetch(file);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${title}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      return;
    } catch {
      setLoadingIndicator(false);
    } finally {
      setLoadingIndicator(false);
    }
  };
  const moveToTrash = async () => {
    try {
      await moveToTrashConvex({
        userId: userId,
        storageId: id,
        collectionId: collectionId,
      });
      toast({
        title: "Deleted Successfully",
        description: "You have deleted your post successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Error happened while deleting your collection.",
      });
    }
  };

  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle className="flex gap-2 text-2xl font-semibold">
          {title}
        </CardTitle>
        <div className="absolute top-2 right-2">
          {/* <FileCardActions isFavorited={file.isFavorited} file={file} /> */}
        </div>
      </CardHeader>
      <CardContent className="h-[200px] flex justify-center items-center">
        {type == "pdf" ? (
          <PdfIcon className="w-[150px] hover:scale-105 transition-all" />
        ) : type == "image" ? (
          <Image
            src={file || ""}
            alt={title || ""}
            className="w-[150px] hover:scale-105 transition-all"
            width={100}
            height={100}
          />
        ) : type == "word" ? (
          <Word className="w-[150px] hover:scale-105 transition-all fill-primary" />
        ) : type == "csv" ? (
          <CsvIcon className="w-[150px] hover:scale-105 transition-all fill-primary" />
        ) : (
          <FileText
            size={150}
            className="hover:scale-105 transition-all fill-primary"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">{`Created : ${socialDate(date || 0)}`}</div>
        <div className="flex items-center justify-end">
          <Button
            variant="link"
            disabled={loadingIndicator}
            onClick={handleDownload}
            className="text-primary flex justify-center items-center gap-1"
          >
            {loadingIndicator ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Download className="w-6 h-6" />
            )}
          </Button>

          {/* <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="link"
                className="text-destructive flex justify-center items-center gap-1"
              >
                <Trash2 className="w-6 h-6" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  {`You wanted to send the book "${title}" to the trash, this book will
                be permanently deleted in 15 days.`}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-6">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={moveToTrash}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog> */}
        </div>
      </CardFooter>
    </Card>
  );
}
