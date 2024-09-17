/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useQuery } from "convex/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getFormattedInitials from "@/lib/get-formatted-initials";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

function ProfileInfoCard({ user }: { user: any }) {
  const postNumber = useQuery(api.post.getPostsByUserId, {
    userId: user.id as Id<"users">,
  });
  const bookmarkNumber = useQuery(api.bookmark.getBookmarksByUserId, {
    userId: user.id as Id<"users">,
  });
  const likeNumber = useQuery(api.like.getLikesByUserId, {
    userId: user.id as Id<"users">,
  });
  return (
    <div className="w-full max-w-[380px] shadow-box border-t-4 border border-border rounded-lg border-t-primary">
      <div className="p-6">
        <div className="text-center">
          <Avatar className="inline-block w-32 h-32 static">
            <AvatarImage src={user?.picture} />
            <AvatarFallback>
              {getFormattedInitials(user?.name || "A")}
            </AvatarFallback>
          </Avatar>
        </div>

        <h3 className="text-xl font-semibold text-center mt-4">
          {user.name || "User"}
        </h3>

        <p className="text-foreground text-center text-sm">
          {user.email || "email"}
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between border-b pb-2">
            <span className="font-semibold">Posts</span>
            <a className="text-foreground">{postNumber?.length || 0}</a>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-semibold">Book Marks</span>
            <a className="text-foreground">{bookmarkNumber?.length || 0}</a>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Liked Posts</span>
            <a className="text-foreground">{likeNumber?.length || 0}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfoCard;
