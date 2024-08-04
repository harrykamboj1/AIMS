import React, { useEffect, useState } from "react";
import ProgressCourseItem from "./progressCourseItem";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InProgressCourseList = ({ inProgressList }) => {
  return (
    <div className="p-5 bg-white mt-3 rounded-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-primary text-[18px] font-semibold">
          Recent Enrolled Courses
        </h2>
        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {inProgressList?.length > 0
          ? inProgressList.map((item, index) => (
              <Link
                key={index}
                href={"/course-preview/" + item?.courseList?.slug}
              >
                <div>
                  <ProgressCourseItem key={index} course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default InProgressCourseList;
