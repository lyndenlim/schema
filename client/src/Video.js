import React from 'react'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';

function Video() {
  const { id } = useParams()
  return (
    <div className="video-player">
      <iframe
        title={id}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1`}
        width="1120px"
        height="560px"
        allow="fullscreen; autoplay"
        frameBorder="0"
        style={{ border: "solid 4px #37474F" }}
      >
      </iframe>
      <br />
      <button className="video-follow-button"><FontAwesomeIcon icon={faHeart} /> Follow</button>
    </div>
  )
}

export default Video