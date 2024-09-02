import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = { book: { [key: string]: any } };

export default function CardBook({ book }: Props) {
  console.log(book);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={
            book.picture
              ? `https:${book.picture.url.replace("S.jpg", "L.jpg")}`
              : ""
          }
          alt={book.title}
          width={100}
          height={200}
        />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
