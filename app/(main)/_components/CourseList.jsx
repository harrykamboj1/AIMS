"use client";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCoursesList();
  }, []);

  const getAllCoursesList = () => {
    api.getCourseList().then((resp) => {
      console.log(resp);
      setCourseList(resp?.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      {/* {Title and filter} */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <div key={index}>
                <CourseCard course={item} />
              </div>
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

export default CourseList;
