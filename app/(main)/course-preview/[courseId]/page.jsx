"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import api from "@/utils/api";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";

const CoursePreview = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  // used to get Course data by slug name
  const getCourseInfoById = () => {
    api.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp);
    });
  };

  useEffect(() => {
    if (courseInfo && user) {
      checkUserEnrolledToCourse();
    }
  }, [courseInfo, user]);

  const checkUserEnrolledToCourse = () => {
    api
      .checkUserEnrolledToCourse(
        courseInfo?.courseList?.slug,
        user?.primaryEmailAddress?.emailAddress
      )
      .then((resp) => {
        if (resp?.userEnrollCourses[0]?.id) {
          setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
        }
      });
  };
  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo?.courseList} />
        </div>
        <div>
          <CourseEnrollSection
            courseInfo={courseInfo?.courseList}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection
            courseInfo={courseInfo?.courseList}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
        </div>
      </div>
    )
  );
};

export default CoursePreview;
