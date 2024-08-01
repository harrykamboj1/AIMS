"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import api from "@/utils/api";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";

const CoursePreview = ({ params }) => {
  const [courseInfo, setCourseInfo] = useState();
  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  // used to get Course data by slug name
  const getCourseInfoById = () => {
    api.getCourseById(params?.courseId).then((resp) => {
      console.log(resp);
      setCourseInfo(resp);
    });
  };
  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo?.courseList} />
        </div>
        <div>
          <CourseEnrollSection />
          <CourseContentSection courseInfo={courseInfo?.courseList} />
        </div>
      </div>
    )
  );
};

export default CoursePreview;
