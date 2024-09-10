"use client";
import { ReactNode } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, Heart, MessageCircle, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
export default function PostUI({
  body,
  userId,
  time,
  bookId,
  title,
}: {
  body: string;
  userId: Id<"users">;
  time: number;
  bookId: string;
  title: string;
}) {
  const navigate = useRouter();
  const user = useQuery(api.user.getUser, { userId: userId });

  const date = new Date(time);

  // Formater la date
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("fr-FR", options);
  const goToPath = (path: string) => {
    // navigate("/user/forum/[postId]", { postId: "123" });
    // navigate("/user/forum/[postId]");
  };
  return (
    <div className="flex gap-6 p-4 w-full max-w-[450px] items-start border border-border">
      <Avatar>
        <AvatarImage src={user?.image} alt={`Image de ${user?.name}`} />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center text-sm gap-3 mb-2 cursor-pointer">
          <p className="text-foreground font-medium">{`@${user?.name}`}</p>
          <p className="text-muted-foreground">{formattedDate}</p>
        </div>
        {/* text comment */}
        <p className="mb-2 text-justify">{body}</p>

        {/* image post */}

        {/* <Image
          src={"/hero.png"}
          width={200}
          height={100}
          alt="post image"
          //    className="w-full max-h-[500px] object-center mb-2"
        /> */}

        <div className="flex justify-between">
          {/* comment btn */}
          <Link href="/user/forum/dkkdkdk">
            <Button variant="ghost" size="sm">
              <MessageCircle size={18} />
            </Button>
          </Link>
          {/* like btn */}
          <Button variant="ghost" size="sm">
            <Heart size={18} />
          </Button>
          {/* bookmark btn */}
          <Button variant="ghost" size="sm">
            <Bookmark size={18} />
          </Button>
          {/* share btn */}
          <Button variant="ghost" size="sm">
            <Share2 size={18} />
          </Button>
        </div>
        {/* comments input */}
        {/* <div>{children}</div> */}
      </div>
    </div>
  );
}
