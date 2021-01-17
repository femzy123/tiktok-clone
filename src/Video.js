import React, { useState, useRef } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import video from "./videos/1.mp4";

function Video({
  file,
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={file}
      ></video>
      <VideoFooter
        channel="femzycodes"
        song="All of the lights - Kanye West"
        description="Something very random then add a little hashtags #random"
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;

// import React from "react";

// const printStatement = () => {
//   return "this is a sample react application.";
// };

// const Home = ({ sentence }) => {
//   const breakApart = sentence.split(" ");
//   var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

//   const applyColor = (word) => {
//     return <span style={{ color: "#" + randomColor() }}>{word} </span>;
//   };

//   return (
//     <div>
//       <p>{breakApart.map((word) => applyColor(word))}</p>
//     </div>
//   );
// };

// export default Home;
