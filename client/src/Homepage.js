import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Stream from "./Stream"

function Homepage() {
  const [scienceTechStreams, setScienceTechStreams] = useState([])
  const [softDevStreams, setSoftDevStreams] = useState([])

  useEffect(() => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=2"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=2"

    axios.all([axiosInstance.get(scienceAndTechURL), axiosInstance.get(softwareAndDevelopmentURL)])
      .then(res => {
        setScienceTechStreams(res[0].data.data)
        setSoftDevStreams(res[1].data.data)           
      })
  }, [])

  return (
    <div>{[...scienceTechStreams, softDevStreams].flat().map(stream => <Stream key={stream.id} stream={stream} />)}</div>
  )
}

export default Homepage