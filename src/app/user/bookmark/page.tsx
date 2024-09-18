"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/providers/auth-provider";
import { FileBrowser } from "@/components/bookmark/file-browser";

export default function BookMark() {
  const { user } = useAuth();
  if (!user.id) return;

  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <FileBrowser userId={user.id} />
    </ScrollArea>
  );
}
