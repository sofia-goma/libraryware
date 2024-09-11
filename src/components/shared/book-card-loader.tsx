import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookAIcon, Bookmark, CirclePlus } from "lucide-react";

export default function BookCardLoader({}) {
  return (
    <Card className="w-[250px] p-4 m-0 animate-pulse">
      <CardHeader className="p-4 text-center">
        <CardTitle className="h-5 bg-gray-300 rounded w-[150px] mx-auto mb-2"></CardTitle>
        <CardDescription>
          <span className="font-bold text-xs">Author: </span>
          <span className="h-4 bg-gray-200 rounded w-[100px] mx-auto"></span>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0 flex items-center justify-center">
        <div className="bg-gray-300 rounded object-cover w-[150px] h-[230px]"></div>
      </CardContent>
      <CardFooter className="pb-0 flex items-center justify-center gap-3 py-2">
        <BookAIcon />
        <CirclePlus />
        <Bookmark />
      </CardFooter>
    </Card>
  );
}
