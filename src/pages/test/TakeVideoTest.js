import React, { useRef, useEffect, useState } from "react";
import "./app.css";
export function TakeVideoTest() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  // const getVid
  const getVideo = () => {
    const supports = navigator.mediaDevices.getSupportedConstraints();
    if (!supports["facingMode"]) {
      alert("This browser does not support facingMode!");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({
        video: { width: 852, height: 480, facingMode: "environment" },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="camera-test">
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>

        <button>CLOSE!</button>
      </div>
    </div>
  );
}
