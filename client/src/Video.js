import React from 'react'
import { useParams } from "react-router-dom"

function Video() {
  const { id } = useParams()
  return (
    <div className="video-player">
      <iframe
        title={id}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1`}
        width="1120px"
        height="600px"
        allow="fullscreen; autoplay"
        frameBorder="0"
        style={{ border: "solid 4px #37474F" }}
      ></iframe>
    </div>
  )
}

export default Video