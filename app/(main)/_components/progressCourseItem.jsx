import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

const ProgressCourseItem = ({ course }) => {
  const getTotalCompletedChapterPercentage = (item) => {
    const perc =
      (item.completedChapter?.length / item?.courseList?.chapter?.length) * 100;

    return perc;
  };
  return (
    <div className="border p-2 shadow-sm hover:shadow-md hover:shadow-purple-300 cursor-pointer rounded-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300 ">
      <Image
        src={course?.courseList?.banner?.url}
        width={500}
        height={150}
        alt="banner"
        className="rounded-xl"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-medium">{course?.courseList?.name}</h2>
        <h2 className="text-[13px] text-gray-400">
          {course?.courseList?.author}
        </h2>
        <h2 className="text-[13px] text-gray-400 mt-3">
          {getTotalCompletedChapterPercentage(course)}%
          <span className="float-right">
            {course.completedChapter?.length}/
            {course?.courseList?.chapter?.length} Chapters
          </span>
        </h2>
        <Progress
          value={getTotalCompletedChapterPercentage(course)}
          className="h-[8px]"
        />
      </div>
    </div>
  );
};

export default ProgressCourseItem;
