import React from 'react'
import { useParams } from "react-router-dom"

function Video() {
  const { id } = useParams()
  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
        width="1150px"
        height="600px"
        frameborder="0"
        style={{ border: "solid 4px #37474F" }}
      ></iframe>
    </>
  )
}

export default Video