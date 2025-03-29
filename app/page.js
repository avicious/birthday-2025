"use client";

import { useEffect, useRef, useState } from "react";

const page = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [image, setImage] = useState("play");

  const audioRef = useRef(null);

  const onClickHandler = () => {
    if (image === "play") {
      setImage("pause");
    } else {
      setImage("play");
    }

    setIsAudioPlaying((prev) => !prev);
  };

  const onEndHandler = () => {
    setImage("play");
    setIsAudioPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <>
      <div className="container">
        <img className="square" src="/birthday.webp" />
        <div className="media">
          <img onClick={onClickHandler} src={`/${image}.png`} />
          <audio ref={audioRef} onEnded={onEndHandler} src="/audio.mp3" />
        </div>
      </div>
    </>
  );
};

export default page;
