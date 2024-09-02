"use client";
import React from "react";
import ProfileInfoCard from "@/components/ui/ProfileInfoCard";
import ProfileTabCard from "@/components/ui/ProfileTabCard";

function ProfileLayout() {
  return (
    <div className="flex gap-2">
      <ProfileInfoCard />
      <ProfileTabCard />
    </div>
  );
}

export default ProfileLayout;
