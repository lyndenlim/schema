import React from "react"
import '@mux-elements/mux-video'
import { useParams } from "react-router-dom";

function UserStream({ user }) {
  const { id } = useParams()

  return (
    <div className="mux-video-container" style={{ paddingTop: "100px" }}>
      <mux-video
        controls
        playback-id={id}
        width="1120px"
        height="560px"
        autoplay={true}
      />
      );
    </div>
  )
}

export default UserStream