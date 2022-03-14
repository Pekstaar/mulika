import React, { useContext, useEffect, useState } from "react";
import { Context } from "../utils/MainContext";
import { Layout } from "../components/layouts/Layout";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import ReactPlayer from "react-player/file";

export const Recordings = () => {
  const { vBlob } = useContext(Context);
  const [videoURL, setVideoUrl] = useState();
  const [play, setPlay] = useState(false);

  const handleEnded = () => {
    setPlay(false);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
    if (vBlob) {
      const videoUrl = window.URL.createObjectURL(vBlob);
      setVideoUrl(videoUrl);
    }
  }, [vBlob]);
  return (
    <Layout current="Recording">
      <div className="h-full relative blob " onClick={togglePlay}>
        {videoURL ? (
          <ReactPlayer
            url={videoURL}
            playing={play}
            className="object-cover"
            width="100%"
            height="100%"
            onEnded={handleEnded}
          />
        ) : (
          <div className="bg-gray-400 w-full h-full object-cover"></div>
        )}
        {play ? (
          <div
            onClick={() => setPlay(!play)}
            className="absolute top-1/2 left-1/2 text-5xl opacity-20 text-white hover:opacity-100  cursor-pointer"
          >
            <GiPauseButton />
          </div>
        ) : (
          <div
            onClick={() => setPlay(!play)}
            className="absolute top-1/2 left-1/2 text-4xl text-white cursor-pointer"
          >
            <FaPlay />
          </div>
        )}
        <div className="absolute bottom-2 left-0 right-0 flex flex-col gap-1 items-center text-white px-4">
          <span className="text-xl font-bold">Thika Road, Survey</span>
          <span>
            adipisicing elit. Ea adipisci excepturi nobis quo explicabo qui
            dolorum corporis itaque molestias vitae?
          </span>
        </div>
      </div>
    </Layout>
  );
};
