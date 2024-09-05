"use client";
import React from "react";
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import ProfileInfoCard from "@/components/ui/ProfileInfoCard";
import ProfileTabCard from "@/components/ui/ProfileTabCard";

function ProfileLayout() {
  // npx convex dev --configure=existing --team librarywave --project libraryware
  const getUser = useMutation(api.user.getUser);

  const fetchUser = async () => {
    // setLoading(true);
    // setError(null);
    try {
      // const userData = await getUser({ userId: "hellowd" });
      // console.log(userData);
      // setUser(userData);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  // console.log(getUserInfo);
  return (
    <div className="flex gap-2">
      <ProfileInfoCard />
      <ProfileTabCard />
    </div>
  );
}

export default ProfileLayout;
