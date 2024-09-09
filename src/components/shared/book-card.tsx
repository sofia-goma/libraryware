import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookAudioIcon,
  BookAIcon,
  PlusCircleIcon,
  BookmarkPlus,
  BookmarkMinus,
  Bookmark,
} from "lucide-react";

export default function BookCard({ author, title, cover, href }: IBookCard) {
  return (
    <Card className="w-[250px] p-0 m-0">
      <CardHeader className="pt-0 text-center">
        <CardTitle>
          <Link
            className="text-sm hover:text-primary transition-colors"
            href={href}
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          <span className="text-xs">
            <span className="font-bold">Author: </span>
            {author}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0 flex items-center justify-center">
        <Image
          src={`${cover ? `${cover}` : `/cover_not_found.jpg`}`}
          width={150}
          height={150}
          className="object-cover"
          alt="book card image"
        />
      </CardContent>
      <CardFooter className="pb-0 flex items-center justify-center gap-3 py-2">
        <BookAIcon className="hover:cursor-pointer" color="blue" />
        <PlusCircleIcon className="hover:cursor-pointer" />
        <Bookmark className="hover:cursor-pointer" />
      </CardFooter>
    </Card>
  );
}
