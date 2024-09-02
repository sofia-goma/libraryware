/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function ProfileInfoCard() {
  return (
    <div className="w-3/12 bg-white shadow-box border-t-4 border-solid border-primary rounded-lg">
      <div className="p-6">
        <div className="text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://avatars.githubusercontent.com/u/142086785?v=4"
            alt="User profile picture"
          />
        </div>

        <h3 className="text-xl font-semibold text-center mt-4">
          Birusha Rusha
        </h3>

        <p className="text-gray-600 text-center">Software Engineer</p>

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
