import { useState } from "react";

const Logic = () => {
  const [videoURL, setVideoUrl] = useState();
  const [play, setPlay] = useState(false);

  const handleEnded = () => {
    setPlay(false);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  return { togglePlay, handleEnded, setVideoUrl, videoURL, setPlay, play };
};

export default Logic;
