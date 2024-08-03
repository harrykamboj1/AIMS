import {
  FastForward,
  ForwardIcon,
  StepBackIcon,
  StepForward,
  StepForwardIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useRef } from "react";

const VideoPlayer = ({ videoUrl, poster }) => {
  const videoRef = useRef(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
      showPopupMessage("+5s");
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
      showPopupMessage("-5s");
    }
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000); // Hide popup after 1 second
  };
  return (
    <div className="relative inline-block">
      <video
        ref={videoRef}
        className="rounded-sm"
        width={1000}
        height={250}
        controls
        poster={poster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {showPopup && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded transition ease-in-out">
          {popupMessage}
        </div>
      )}
      <div className="ml-3 absolute bottom-4 left-1/2 transform -translate-x-1/3 flex">
        <button
          onClick={handleBackward}
          className="bg-transparent text-white py-2 rounded-full hover:text-gray-300"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "calc(50% - 50px)",
          }}
        >
          <StepBackIcon />
        </button>
        <button
          onClick={handleForward}
          className="bg-transparent text-white  py-2 rounded-full hover:text-gray-300"
          style={{
            position: "absolute",
            bottom: "10px",
            // left: "calc(20% + 40px)",
          }}
        >
          <StepForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
