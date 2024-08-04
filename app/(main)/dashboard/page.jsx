"use client";
import React, { useEffect, useState } from "react";
import WelcomeBanner from "../_components/WelcomeBannerDashboard";
import { useUser } from "@clerk/nextjs";
import CourseList from "../_components/CourseList";
import SideBanner from "../_components/SideBanner";
import InProgressCourseList from "../_components/InProgressCourseList";
import api from "@/utils/api";

const Dashboard = () => {
  const { user } = useUser();
  const [inProgressList, setInProgressList] = useState([]);

  useEffect(() => {
    user && getInProgressCourseList();
  }, [user]);

  const getInProgressCourseList = () => {
    api
      .getInProgressCourseList(user?.primaryEmailAddress.emailAddress)
      .then((resp) => {
        console.log(resp.userEnrollCourses);
        setInProgressList(resp.userEnrollCourses);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        <WelcomeBanner user={user} />
        <InProgressCourseList inProgressList={inProgressList} />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
};

export default Dashboard;
