import React, { useEffect, useRef } from "react"
import '@mux-elements/mux-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { useParams } from "react-router-dom";

function UserStream({ user }) {
  const { id } = useParams()

  return (
    <div className="mux-video-container">
      <mux-video
        controls
        playback-id={id}
        width="1120px"
        height="560px"
        autoplay={true}
      />
      <br />
      {user ? <button className="video-follow-button"><FontAwesomeIcon icon={faHeart} /> Follow</button> : null}

      );
    </div>
  )
}

export default UserStream