import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import socialDate from "@/lib/social-date";
import { StarIcon, StarHalf } from "lucide-react";
import { Id, Doc } from "../../../convex/_generated/dataModel";
import { FileTextIcon, GanttChartIcon, ImageIcon } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import { FileCardActions } from "./file-actions";
import Link from "next/link";

export function FileCard({
  id,
  href,
  title,
  cover,
  author,
  openLibraryId,
  file,
}: {
  file?: Doc<"files"> & { isFavorited: boolean; url: string | null };
  id?: string;
  href?: string;
  title?: string;
  cover?: string;
  author?: string;
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
          <div className="flex justify-center">hey</div>{" "}
          <Link href={href || ""} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <div className="absolute top-2 right-2">
          {/* <FileCardActions isFavorited={file.isFavorited} file={file} /> */}
        </div>
      </CardHeader>
      <CardContent className="h-[200px] flex justify-center items-center">
        <Image
          alt={title + "cover image"}
          width="100"
          height="0"
          src={cover || ""}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">{author}</div>
        <StarIcon size={12} />
      </CardFooter>
    </Card>
  );
}
