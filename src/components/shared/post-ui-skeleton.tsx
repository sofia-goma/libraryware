import { UserCircle } from "lucide-react";

export default function PostUISkeleton() {
  return (
    <div className="flex gap-6 p-4 items-start border border-border">
      <UserCircle />
      <div className="w-full">
        <div className="h-4 w-[80%] bg-[#202327] rounded-full mb-6 animate-pulse"></div>
        <div className="h-4 bg-[#202327] rounded-full mb-4 animate-pulse"></div>
        <div className="h-4 bg-[#202327] rounded-full mb-4 animate-pulse"></div>
        <div className="h-4 bg-[#202327] rounded-full mb-4 animate-pulse"></div>
      </div>
    </div>
  );
}
