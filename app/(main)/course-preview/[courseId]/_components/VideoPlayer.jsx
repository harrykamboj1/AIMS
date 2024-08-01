import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <video className="rounded-sm" width={1000} height={250} controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
