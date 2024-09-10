import Link from "next/link";
import BookCard from "@/components/shared/book-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function BookMark() {
  const bookmarkedBooks: any[] = [];
  // console.log('helloworld');
  // console.log("user: ", user);
  // const bookmarked = useQuery(api.bookmark.getBookmarksByUserId);

  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <ul className="flex items-center justify-center">
        {bookmarkedBooks.length === 0 && (
          <TooltipProvider>
            <div className="flex flex-col items-center gap-3 justify-center">
              <p className="text-center text-secondary-foreground leading-10 text-2xl">
                Your bookmarks are empty for now. Add books to your collection
                and revisit them anytime!
              </p>
              <Link href="/user">
                <Button size="lg">START EXPLORING</Button>
              </Link>
            </div>
          </TooltipProvider>
        )}
        <div className="flex flex-wrap gap-3">
          {bookmarkedBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              href="#"
              author={book.author}
              title={book.title}
            />
          ))}
        </div>
      </ul>
    </ScrollArea>
  );
}
