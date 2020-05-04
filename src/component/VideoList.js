import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, selectedVideos }) => {
  //props video
  const renderList = videos.map((video) => {
    return (
      <VideoItems
        key={video.id.videoId}
        selectedVideos={selectedVideos}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
