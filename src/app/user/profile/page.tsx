"use client";
import React from "react";
import ProfileInfoCard from "@/components/shared/profile-info-card";
import { useAuth } from "@/providers/auth-provider";

function ProfilePage() {
  const { user } = useAuth();
  if (!user.id) return;
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <ProfileInfoCard user={user} />
      {/* <ProfileTabCard user={user} /> */}
    </div>
  );
}

export default ProfilePage;
