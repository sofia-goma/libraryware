import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

type Props = { userId: Id<"users">; time: number; body: string };

export default function CommentUI({ userId, time, body }: Props) {
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
  return (
    <div className="flex gap-6 p-4 w-full max-w-[450px] items-start border border-border">
      <Avatar className="w-[30px]">
        <AvatarImage
          src={user?.image}
          alt={`Image de ${user?.name}`}
          className="rounded-full"
        />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
      <div>
        <p className="mb-2 text-justify">{body}</p>

        <div className="flex items-center text-sm gap-3 mb-2 cursor-pointer">
          <p className="text-xs text-foreground font-medium">{`@${user?.name}`}</p>
          <p className="text-xs text-muted-foreground">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
