import React, { useEffect, useRef } from "react";
import '@mux-elements/mux-video'

function FavoritePage() {
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch(error => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);

  return (
    <mux-video
      controls
      playback-id="z5Jz02Str4dXCV8hhjXjjWSFAUfxDBvhULy00L0073ydCc"
      width="1120px"
      height="600px"
      // playsInline
      // ref={videoEl}
    />

  );
}

export default FavoritePage