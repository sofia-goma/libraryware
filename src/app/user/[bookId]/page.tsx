/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import Loading from "@/components/shared/loading";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { BookmarkCheck, BookmarkIcon, BookOpenText } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { PostPopup } from "@/components/shared/post-popup";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import BookId from "@/components/shared/book-id";

export default function BookDetails({
  params,
}: {
  params: {
    bookId: Id<"book">;
  };
}) {
  const { user } = useAuth();
  const router = useRouter();
  if (!user.id) {
    return <Loading />;
  }

  return (
    <TooltipProvider>
      <Button variant="outline" className="mb-2" onClick={() => router.back()}>
        Go Back
      </Button>
      <BookId userId={user.id} bookId={params.bookId} />
    </TooltipProvider>
  );
}
