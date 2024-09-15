"use client";
import CollectionList from "@/components/bookmark/collection-list";
import { useAuth } from "@/providers/auth-provider";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Collections() {
  const { user } = useAuth();
  if (!user) return;
  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <CollectionList user={user} />
    </ScrollArea>
  );
}
