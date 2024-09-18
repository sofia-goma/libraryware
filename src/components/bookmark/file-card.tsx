import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import socialDate from "@/lib/social-date";
import { FileText, Trash2 } from "lucide-react";
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
import { DownloadIcon } from "lucide-react";
export function FileCard({
  id,
  userId,
  title,
  type,
  date,
  file,
}: {
  file?: string;
  id: Id<"collections"> | any;
  userId: Id<"users">;
  title?: string;
  type?: "image" | "text" | "word" | "csv" | "pdf";
  date?: number;
  openLibraryId?: string;
}) {
  const moveToTrashConvex = useMutation(api.collections.moveToTrash);

  const moveToTrash = async () => {
    try {
      await moveToTrashConvex({ userId: userId, storageId: id });
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
        <div className="absolute top-2 right-2"></div>
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
          <Word className="w-[150px] hover:scale-105 transition-all" />
        ) : type == "csv" ? (
          <CsvIcon className="w-[150px] hover:scale-105 transition-all" />
        ) : (
          <FileText size={150} className="hover:scale-105 transition-all" />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">{`Created : ${socialDate(date || 0)}`}</div>
        <div className="flex">
          <Button
            variant="link"
            className="text-destructive flex justify-center items-center gap-1"
          >
            <DownloadIcon className="w-6 h-6" />
          </Button>
          <AlertDialog>
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
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
}
