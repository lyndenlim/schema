import React from 'react'
import { useParams } from "react-router-dom"

function Video() {
  const { id } = useParams()
  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
        height="600px"
        width="1150px"
        frameborder="0"
        style={{ border: "solid 4px #37474F" }}
      ></iframe>
    </>
  )
}

export default Video