import React from "react";
import "./VideoItems.css";

const VideoItems = ({ video, selectedVideos }) => {
  return (
    <div className="video-item item" onClick={() => selectedVideos(video)}>
      <img
        key={video.snippet.videoId}
        alt={video.snippet.description}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItems;
