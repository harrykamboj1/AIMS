import Image from "next/image";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border p-2 shadow-sm hover:shadow-md hover:shadow-purple-300 cursor-pointer rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 ">
      <Image
        src={course?.banner?.url}
        width={500}
        height={150}
        alt="banner"
        className="rounded-xl"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-medium">{course?.name}</h2>
        <h2 className="text-[13px] text-gray-400">{course?.author}</h2>
        {course?.chapter?.length === 0 ? (
          <div className="flex gap-2">
            <Image src={"/youtube.png"} alt="youtube" width={20} height={20} />
            <h2 className="text-[14px] text-gray-400">Watch on Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src={"/chapter.png"} alt="chapter" width={20} height={20} />
            <h2 className="text-[14px] text-gray-400">
              {course?.totalChapters} Chapters
            </h2>
          </div>
        )}
        <div className="flex items-center justify-between">
          <h2 className="text-[14px] text-gray-500">
            {course?.free ? "Free" : "Paid"}
          </h2>
          <h2 className="text-[14px] text-gray-500">{course?.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
