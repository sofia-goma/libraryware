import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';

export default function BookCard({
  title,
  cover,
  date,
  href
}: {
  title: string;
  cover?: string;
  date?: string;
  href: string; // Link to book detail page, e.g., '/books/[id]' or '/books/[slug]' (slug is the title in lowercase)
}) {
  const newDate = date?.split("T")[0];
  date = newDate;

  return (
    <Card className="w-[250px] p-0 m-0">
      <CardFooter className=""></CardFooter>
      <CardContent className="py-0 flex items-center justify-center">
        <Image
          src={`${cover ? `https://${cover}` : `/cover_not_found.jpg`}`}
          width={150}
          height={150}
          className="object-cover"
          alt="book card image"
        />
      </CardContent>
      <CardHeader className="pt-0 text-center">
        <CardTitle>
          <Link className="text-sm hover:text-primary transition-colors" href={href}>{title}</Link>
        </CardTitle>
        <CardDescription>
          <p className="text-xs">
            <span className="">Last update: </span>
            {date}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
