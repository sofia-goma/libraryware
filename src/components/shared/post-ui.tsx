"use client";
import { ReactNode } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, Heart, MessageCircle, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function PostUI({ children }: { children?: ReactNode }) {
  const navigate = useRouter();
  const goToPath = (path: string) => {
    // navigate("/user/forum/[postId]", { postId: "123" });
    // navigate("/user/forum/[postId]");
  };
  return (
    <div className="flex gap-6 p-4 w-full max-w-[450px] items-start border border-border">
      <Avatar>
        <AvatarImage src="https://example.com/image.jpg" alt="User's Avatar" />
        <AvatarFallback>BN</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex items-center text-sm gap-3 mb-2 cursor-pointer">
          <p className="text-foreground font-medium">{"@username"}</p>
          <p className="text-muted-foreground">{"Lundi 20/48/2048"}</p>
        </div>
        {/* text comment */}
        <p className="mb-2 text-justify">
          {
            "tweetText chinois est le christian lorem ipsum it is the way of saying what you what to do if there is nothing to do tell That I am a magician like a magician I have power I and I use magic"
          }
        </p>

        {/* image post */}

        <img
          src={"/hero.png"}
          width={200}
          height={100}
          //    className="w-full max-h-[500px] object-center mb-2"
        />

        {/* action buttons */}

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
        <div>{children}</div>
      </div>
    </div>
  );
}
