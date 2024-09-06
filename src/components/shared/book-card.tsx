import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

export default function BookCard({
  title,
  cover,
  date,
}: {
  title: string;
  cover?: string;
  date?: string;
}) {
  const newDate = date?.split("T")[0];
  date = newDate;

  return (
    <Card className="w-[380px] h-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>          
          <span className="font-bold">Last update: </span>{date}
        </CardDescription>
      </CardHeader>
      <CardContent className='overflow-hidden'>
        <div className="w-[100%] h-[100%]">
          {cover ? (
            <img src={cover || ""} className="w-[100%] h-[100%] object-cover" alt="cover" />
          ) : (
            <div className="w-[100%] h-[50%] bg-black"></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
