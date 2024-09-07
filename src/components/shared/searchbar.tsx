import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Searchbar() {
  return (
    <div className="hidden md:flex border-1 border-border overflow-hidden max-w-md mx-auto bg-background text-foreground">
      <Input
        type="search"
        placeholder="Search your favorites..."
        className="w-full outline-none rounded-none bg-background text-sm px-4 py-3"
      />
      <Button
        type="button"
        className="px-5 rounded-none"
      >
        Search
      </Button>
    </div>
  );
}
