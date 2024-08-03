import { Button } from "@/components/ui/button";
import api from "@/utils/api";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CourseEnrollSection = ({ courseInfo, isUserAlreadyEnrolled }) => {
  const membership = false;
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  const onEnrollCourse = () => {
    api
      .enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log(resp);
        if (resp) {
          router.push(`/watch-course/${resp.createUserEnrollCourse.id}`);
          toast("User Enrolled Successfull", {
            description: `${user?.fullName} enrolled in course ${courseInfo?.name}`,
          });
        } else {
        }
      });
  };
  return (
    <div className="p-3 text-center rounded-sm bg-primary ">
      <h2 className="text-[22px] font-bold text-white">Enroll to the Course</h2>
      {user && (membership || courseInfo?.free) && !isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white hover:text-primary"
            onClick={() => onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserAlreadyEnrolled && (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Buy Course and start Learning
            </h2>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Buy Course
            </Button>
          </div>
        )
      )}

      {isUserAlreadyEnrolled && (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">Continue Learning</h2>
          <Link href={`/watch-course/${isUserAlreadyEnrolled}`}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollSection;
