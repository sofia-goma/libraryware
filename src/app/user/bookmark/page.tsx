"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Bookmarked from "@/components/shared/book-marked";
import { useAuth } from "@/providers/auth-provider";

export default function BookMark() {
  const { user } = useAuth();
  if (!user.id) return;

  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <Bookmarked userId={user.id} />
    </ScrollArea>
  );
}
