/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CircleUser } from "lucide-react";

function ProfileInfoCard({ user }: { user: any }) {
  return (
    <div className="w-full md:w-4/12 lg:w-3/12 bg-white shadow-box border-t-4 border-solid border-primary rounded-lg">
      <div className="p-6">
        <div className="text-center">
          {user?.picture ? (
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="user?.picture"
              alt="User profile picture"
            />
          ) : (
            <CircleUser className="h-32 w-32" />
          )}
        </div>

        <h3 className="text-xl font-semibold text-center mt-4">
          {user.name || "User"}
        </h3>

        <p className="text-gray-600 text-center text-sm">
          {user.email || "email"}
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between border-b pb-2">
            <span className="font-semibold">Liked Books</span>
            <a className="text-gray-800">300</a>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-semibold">Book Marks</span>
            <a className="text-gray-800">123</a>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Friends</span>
            <a className="text-gray-800">1,287</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfoCard;
