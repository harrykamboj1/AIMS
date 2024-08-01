import { Button } from "@/components/ui/button";
import React from "react";

const CourseEnrollSection = () => {
  const membership = true;
  return (
    <div className="p-3 text-center rounded-sm bg-primary ">
      <h2 className="text-[22px] font-bold text-white">Enroll to the Course</h2>
      {membership ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and Get Access to All Courses
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Buy Course
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
