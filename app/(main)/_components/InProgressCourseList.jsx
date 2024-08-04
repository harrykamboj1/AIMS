import React, { useEffect, useState } from "react";
import ProgressCourseItem from "./progressCourseItem";
import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";

const InProgressCourseList = ({ inProgressList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = inProgressList?.filter((course) => {
    const filterSearch = course?.courseList?.name
      .toLowerCase()
      .includes(searchTerm?.toLowerCase());
    return filterSearch;
  });
  return (
    <div className="p-5 bg-white mt-3 rounded-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-primary text-[18px] font-semibold">
          Recent Enrolled Courses
        </h2>
        <div className="flex gap-2 border p-2 mr-5 rounded-md ">
          <Search className="h-5 w-5" />
          <input
            className="outline-none w-full"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Courses..."
          />
        </div>
      </div>

      {filteredCourses?.length > 0 ? (
        filteredCourses.map((item, index) => (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <Link
              key={index}
              href={"/course-preview/" + item?.courseList?.slug}
            >
              <div>
                <ProgressCourseItem key={index} course={item} />
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

export default InProgressCourseList;
