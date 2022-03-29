import React, { useEffect, useRef } from "react"
import '@mux-elements/mux-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import axios from "axios";
import { useParams } from "react-router-dom";

function LiveStream({ user }) {
  const { id } = useParams()
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
  // function addLiveStream() {
  //   axios.post("/favorites", {
  //     stream_id : ""
  //   })
  // }

  return (
    <div className="mux-video-container">
      <mux-video
        controls
        playback-id="z5Jz02Str4dXCV8hhjXjjWSFAUfxDBvhULy00L0073ydCc"
        width="1120px"
        height="560px"
      // playsInline
      // ref={videoEl}
      />
      <br />
      {user ? <button className="video-follow-button"><FontAwesomeIcon icon={faHeart} /> Follow</button> : null}

      );
    </div>
  )
}

export default LiveStream