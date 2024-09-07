import BookCard from "@/components/shared/book-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
export default function BookMark() {
  const bookmarkedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      description:
        "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A journey to follow your dreams and discover your destiny.",
    },
    {
      id: 3,
      title: "Educated",
      author: "Tara Westover",
      description:
        "A memoir about a girl who escapes her strict, survivalist family.",
    },
    {
      id: 4,
      title: "The Power of Habit",
      author: "Charles Duhigg",
      description: "Why We Do What We Do in Life and Business.",
    },
  ];

  return (
    <ScrollArea className="w-full" style={{ height: "calc(100vh - 80px)" }}>
      <ul className="flex items-center justify-center">
        {bookmarkedBooks.length === 0 && (
          <TooltipProvider>
            <div className="flex flex-col items-center gap-3 justify-center">
              <p className="text-center text-secondary-foreground">
                Your bookmarks are empty for now. Add books to your collection
                and revisit them anytime!
              </p>
              <Button size="lg">START EXPLORING</Button>
            </div>
          </TooltipProvider>
        )}
        <div className="flex flex-wrap gap-3">
        {bookmarkedBooks.map((book) => (
          <BookCard key={book.id} href="#" title={book.title} />
        ))}

        </div>
      </ul>
    </ScrollArea>
  );
}
