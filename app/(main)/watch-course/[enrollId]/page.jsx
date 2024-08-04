"use client";
import api from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "../../course-preview/[courseId]/_components/CourseVideoDescription";
import CourseContentSection from "../../course-preview/[courseId]/_components/CourseContentSection";
import { toast } from "sonner";

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [completedChapter, setCompletedChapter] = useState([]);

  useEffect(() => {
    params && user && getUserEnrolledCourseDetails();
  }, [params && user]);

  const getUserEnrolledCourseDetails = () => {
    api
      .getUserEnrolledCourseDetails(
        params?.enrollId,
        user?.primaryEmailAddress.emailAddress
      )
      .then((resp) => {
        setCourseInfo(resp.userEnrollCourses[0].courseList);
        setCompletedChapter(resp.userEnrollCourses[0].completedChapter);
      });
  };

  const markChapterCompleted = (chapterId) => {
    api.markChapterCompleted(chapterId, params.enrollId).then((resp) => {
      if (resp) {
        toast("Chapter Mark as Completed!");
        getUserEnrolledCourseDetails();
      }
    });
  };

  return (
    courseInfo.name && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true}
            setChapterCompleted={(chapterId) => markChapterCompleted(chapterId)}
          />
        </div>
        <div>
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            completedChapter={completedChapter}
            setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
          />
        </div>
      </div>
    )
  );
};

export default WatchCourse;
