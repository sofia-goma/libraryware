"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BookmarkNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <Link href="/user/bookmark">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "": pathname?.includes("/user/bookmark"),
          })}
        >
          <FileIcon /> Bookmarks
        </Button>
      </Link>

      <Link href="/user/bookmark/collections">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "underline": pathname?.includes("/user/bookmark/collections"),
          })}
        >
          <StarIcon /> Collections
        </Button>
      </Link>

      <Link href="/user/bookmark/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "underline": pathname?.includes("/user/bookmark/trash"),
          })}
        >
          <TrashIcon /> Trash
        </Button>
      </Link>
    </nav>
  );
}
