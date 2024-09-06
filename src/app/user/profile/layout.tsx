"use client";
import React from "react";
import ProfileInfoCard from "@/components/ui/ProfileInfoCard";
import ProfileTabCard from "@/components/ui/ProfileTabCard";
import { useAuth } from "@/providers/auth-provider";

function ProfileLayout() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <ProfileInfoCard user={user} />
      <ProfileTabCard user={user} />
    </div>
  );
}

export default ProfileLayout;
