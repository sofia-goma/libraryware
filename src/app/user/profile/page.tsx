"use client";
import React from "react";
import ProfileInfoCard from "@/components/ui/ProfileInfoCard";
import ProfileTabCard from "@/components/ui/ProfileTabCard";
import { useAuth } from "@/providers/auth-provider";

function ProfilePage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <ProfileInfoCard user={user} />
      <ProfileTabCard user={user} />
    </>
  );
}

export default ProfilePage;
