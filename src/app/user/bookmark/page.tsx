"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Bookmarked from "@/components/shared/book-marked";
import { useAuth } from "@/providers/auth-provider";
import { FileBrowser } from "@/components/bookmark/file-browser";

export default function BookMark() {
  const { user } = useAuth();
  if (!user.id || !user) return;


  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      {/* <Bookmarked userId={user.id} /> */}
      <FileBrowser userId={user.id} />
    </ScrollArea>
  );
}

// I will use this code later

// //       <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
// <Bookmarked userId={user.id} />
// </ScrollArea>
