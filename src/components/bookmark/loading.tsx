import { Loader2 } from "lucide-react";

export function Loading({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-8 w-full items-center mt-24">
      <Loader2 className="h-32 w-32 animate-spin text-primary" />
      <div className="text-2xl">Loading your your {title}...</div>
    </div>
  );
}
