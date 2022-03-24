import React, { useState, useEffect } from 'react'
import axios from "axios"
import Thumbnail from "./Thumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage() {
  const [streams, setStreams] = useState([])

  useEffect(async () => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=1"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=3"

    await axios.all([axiosInstance.get(scienceAndTechURL), axiosInstance.get(softwareAndDevelopmentURL)])
      .then(res => {
        setStreams([...res[0].data.data, res[1].data.data].flat())
      })
  }, [])

  return (
    <>
      <div>{streams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}</div>
      <div>{technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} />)}</div>
    </>
  )
}

export default Homepage