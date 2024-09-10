"use client";
import React from "react";
import ProfileInfoCard from "@/components/shared/profile-info-card";
import ProfileTabCard from "@/components/shared/profile-tab-card";
import { useAuth } from "@/providers/auth-provider";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <ProfileInfoCard user={user} />
      <ProfileTabCard user={user} />
    </>
  );
}

export default ProfilePage;
