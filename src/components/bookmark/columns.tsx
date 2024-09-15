"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Doc, Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileCardActions } from "./file-actions";
import socialDate from "@/lib/social-date";
import { useAuth } from "@/providers/auth-provider";

function UserCell({ userId }: { userId: Id<"users"> }) {
  // const userProfile = useQuery(api.users.getUserProfile, {
  //   userId: userId,
  // });
  const { user} = useAuth();
  return (
    <div className="flex gap-2 text-xs text-gray-700 w-40 items-center">
      <Avatar className="w-6 h-6">
        <AvatarImage src={user?.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {user?.name}
    </div>
  );
}

export const columns: ColumnDef<
  Doc<"files"> & { url: string; isFavorited: boolean }
>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    header: "User",
    cell: ({ row: any }) => {
      // return <UserCell userId={row.original.userId} />;
    },
  },
  {
    header: "Uploaded On",
    cell: ({ row: any }) => {
      return (
        <div>
          {/* {socialDate(ow.original._creationTime)} */}
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row: any }) => {
      return (
        <div>
          {/* <FileCardActions
            file={row.original}
            isFavorited={row.original.isFavorited}
          /> */}
        </div>
      );
    },
  },
];
