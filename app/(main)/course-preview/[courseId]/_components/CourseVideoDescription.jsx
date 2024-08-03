import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

const CourseVideoDescription = ({ courseInfo }) => {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
      <h2 className="text-gray-500 text-[14px] mb-3">{courseInfo?.author}</h2>

      <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} />
      <h2 className="mt-5 text-[17px] font-semibold">About This Course</h2>
      <div>
        <Markdown className="text-[13px] font-light mt-2 leading-7">
          {courseInfo?.description}
        </Markdown>
      </div>
    </div>
  );
};

export default CourseVideoDescription;
