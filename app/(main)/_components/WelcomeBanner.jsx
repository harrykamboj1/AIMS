import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl  p-8">
      <Image
        className=""
        src={"/Edu-transformed-2.png"}
        alt="education"
        width={100}
        height={100}
      />
      <div>
        <h2 className="font-bold text-[29px]">
          Welcome to <span className="text-primary">AIMS</span> Institute
        </h2>
        <h2 className="text-gray-500">Explore, Learn and Prepare For Exams</h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
