import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function StreamCarousel({ stream }) {
  const [thumbnail, setThumbnail] = useState()
  useEffect(() => {
    let resizedThumbnail = stream.thumbnail_url.split(/[{}]/)
    resizedThumbnail = resizedThumbnail[0] + "390" + resizedThumbnail[2] + "260" + resizedThumbnail[4]
    setThumbnail(resizedThumbnail)
  }, [])

  return (
    <>
      <Link to={`/streams/${stream.user_id}`} style={{ textDecoration: "none", color: "white" }}>
        <img src={thumbnail} />
        <p className="bold">{stream.title}</p>
        <p>{stream.user_name}</p>
        <p>{stream.game_name}</p>
      </Link>
    </>
  )
}

export default StreamCarousel