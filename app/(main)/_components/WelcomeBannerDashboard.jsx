import Image from "next/image";
import React from "react";

const WelcomeBanner = ({ user }) => {
  return (
    <div className="flex gap-5 items-center  rounded-xl bg-purple-100  p-8">
      <Image
        className=""
        src={"/Edu-transformed-2.png"}
        alt="education"
        width={100}
        height={100}
      />
      <div>
        <h2 className="font-bold text-[29px]">
          Welcome Back <span className="text-primary">{user?.fullName}</span>
        </h2>
        <h2 className="text-gray-500">
          Lets Begin Learning where you left off,
        </h2>
        <h2 className="text-gray-500">Keep it up and improve your progress</h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
