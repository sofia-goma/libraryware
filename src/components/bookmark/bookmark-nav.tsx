"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BookmarkNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/user/bookmark">
        <Button
          variant={
            pathname?.includes("/user/bookmark") ? "secondary" : "outline"
          }
          className={clsx("flex gap-2 mx-0", {
            "": pathname?.includes("/user/bookmark"),
          })}
        >
          <FileIcon /> <span className="hidden md:inline-block">Bookmarks</span>
        </Button>
      </Link>

      <Link href="/user/bookmark/collections">
        <Button
          variant={
            pathname?.includes("/user/bookmark/collections") ? "secondary" : "outline"
          }
          className={clsx("flex gap-2", {
            underline: pathname?.includes("/user/bookmark/collections"),
          })}
        >
          <StarIcon />{" "}
          <span className="hidden md:inline-block">Collections</span>
        </Button>
      </Link>

      <Link href="/user/bookmark/trash">
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
      </Link>
    </nav>
  );
}
