/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import Loading from "@/components/shared/loading";
import { Id } from "../../../../convex/_generated/dataModel";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "@/components/ui/button";
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
