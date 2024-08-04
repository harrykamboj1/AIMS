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
import Link from "next/link";
import Image from "next/image";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllCoursesList();
  }, []);

  const getAllCoursesList = () => {
    api.getCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };

  const filteredCourses = courseList?.filter((course) => {
    if (filter === "paid") return !course.free;
    if (filter === "free") return course.free;
    return true;
  });

  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      {/* {Title and filter} */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select onValueChange={(value) => setFilter(value)}>
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
      {filteredCourses?.length > 0 ? (
        filteredCourses.map((item, index) => (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <Link key={index} href={"/course-preview/" + item.slug}>
              <div>
                <CourseCard course={item} />
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center mt-24">
          <Image
            src="/no-data.svg"
            width="200"
            height="200"
            alt="no data image"
          />

          <h2 className="text-2xl text-gray-00">No course found</h2>
        </div>
      )}
    </div>
  );
};

export default CourseList;
