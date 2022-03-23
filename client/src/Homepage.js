import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Homepage() {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    axios.get("https://api.twitch.tv/helix/streams?game_id=1469308723&first=1", {
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    })
      .then(res => {
        setStreams(res.data.data)
      })
  }, [])

  return (
    <div>{streams.map(stream => <Stream key={stream.id} stream={stream} />)}</div>
  )
}

export default Homepage