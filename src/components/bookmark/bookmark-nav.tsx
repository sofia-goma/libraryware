"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UploadButton } from "./upload-button";
export function BookmarkNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      <Link href="/user/bookmark">
        <Button
          variant={"link"}
          className={clsx("flex gap-2 mx-0", {
            "": pathname?.includes("/user/bookmark"),
          })}
        >
          <FileIcon /> <span className="hidden md:inline-block">Bookmarks</span>
        </Button>
      </Link>

      <Link href="/user/bookmark/collections">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            underline: pathname?.includes("/user/bookmark/collections"),
          })}
        >
          <StarIcon />{" "}
          <span className="hidden md:inline-block">Collections</span>
        </Button>
      </Link>
      <UploadButton />
      {/* <Link href="/user/bookmark/trash">
        <Button
          variant={
            pathname?.includes("/user/bookmark/trash") ? "secondary" : "outline"
          }
          className={clsx("flex gap-2", {
            underline: pathname?.includes("/user/bookmark/trash"),
          })}
        >
          <TrashIcon /> <span className="hidden md:inline-block">Trash</span>
        </Button>
      </Link> */}
    </nav>
  );
}
