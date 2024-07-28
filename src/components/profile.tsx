import React from "react";
import { ProfileType } from "../types/profile.type";

function Profile(profile: ProfileType) {
  return (
    <div className="flex">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-full"></div>
      <div className="flex justify-center flex-col pl-4 md:pl-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{profile.name}</h2>
        <h3 className="text-sm md:text-base">{profile.introduction}</h3>
      </div>
    </div>
  );
}

export default Profile;
