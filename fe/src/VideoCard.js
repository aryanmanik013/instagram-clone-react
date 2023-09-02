import React, { useRef, useState } from "react";
import "./VideoCard.css";
import Video1 from "./assets/Videos/1.mp4";
import VideoHeader from "./Components/VideoHeader";
import VideoFooter from "./Components/VideoFooter";
const VideoCard = ({url,likes,shares,channel,avatarSrc,song}) => {
  const videoRef = useRef(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onVideoPress = () => {
    // console.log(videoRef.current.getBoundingClientRect())

    if (isVideoPlaying) {
      videoRef.current?.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current?.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="video__Card">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        src={Video1}
        className="video__Player"
        loop
      />
      <VideoFooter 
      channel={channel}
      likes={likes}
      shares={shares}
      avatarSrc={avatarSrc}
      song={song}
      />
    </div>
  );
};

export default VideoCard;
