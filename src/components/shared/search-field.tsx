import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchField: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/user?search=${query}`);
    }
  };

  return (
    <div className="w-full flex-1">
      <div className="relative md:w-2/3 lg:w-1/3">
        <form onSubmit={handleSearch}>
          <Input
            type="search"
            placeholder="Search your favorite book..."
            className="w-full appearance-none bg-background pr-9 shadow-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <Button
            className="p-2 absolute right-0 top-0 bg-primary rounded-tl-none rounded-bl-none"
            type="submit"
          >
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchField;
