import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import socialDate from "@/lib/social-date";
import { StarIcon, StarHalf, FileText } from "lucide-react";
import { Id, Doc } from "../../../convex/_generated/dataModel";
import { FileTextIcon, GanttChartIcon, ImageIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import { FileCardActions } from "./file-actions";
import Link from "next/link";
import PdfIcon from "../icons/pdf";
import Word from "../icons/word";
import CsvIcon from "../icons/csv";

export function FileCard({
  id,
  href,
  title,
  type,
  date,
  openLibraryId,
  file,
}: {
  file?: "image" | "text" | "word" | "csv" | "pdf";
  id?: string;
  href?: string;
  title?: string;
  type?: string;
  date?: number;
  openLibraryId?: string;
}) {
  const typeIcons = {
    image: <ImageIcon />,
    pdf: <FileTextIcon />,
    csv: <GanttChartIcon />,
  } as Record<Doc<"files">["type"], ReactNode>;
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle className="flex gap-2 text-base font-normal">
          <h2 className="text-2xl font-semibold">{title}</h2>
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
          <Word className="w-[150px] hover:scale-105 transition-all" />
        ) : type == "csv" ? (
          <CsvIcon className="w-[150px] hover:scale-105 transition-all" />
        ) : (
          <FileText size={150} className="hover:scale-105 transition-all" />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">{`Created : ${socialDate(date || 0)}`}</div>
        <StarIcon size={12} />
      </CardFooter>
    </Card>
  );
}
