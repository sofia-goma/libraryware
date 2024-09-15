"use client";
import TrashList from "@/components/bookmark/trash-list";
import { useAuth } from "@/providers/auth-provider";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Trash() {
  const { user } = useAuth();
  if (!user) return;
  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <TrashList user={user} />
    </ScrollArea>
  );
}
