import React, {useState, useEffect} from 'react'
import axios from "axios"
import Thumbnail from "./Thumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage({ streams, setCategoryStreams }) {
  // const [videos, setVideos] = useState([])
  
  // useEffect(async () => {
  //   const axiosInstance = axios.create({
  //     headers: {
  //       Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
  //       "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
  //     }
  //   });

  //   const scienceAndTechVidURL = `https://api.twitch.tv/helix/videos?game_id=509670&user_id=${}&first=20`
  //   const softwareAndDevelopmentVidURL = `https://api.twitch.tv/helix/videos?game_id=1469308723&user_id=${}&first=20`

  //   await axios.all([axiosInstance.get(scienceAndTechURL), axiosInstance.get(softwareAndDevelopmentURL)])
  //     .then(res => {
  //       setVideos([...res[0].data.data, res[1].data.data].flat())
  //     })
  // }, [])

  return (
    <>
      <div>{streams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}</div>
      <div>{technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} setCategoryStreams={setCategoryStreams} />)}</div>
    </>
  )
}

export default Homepage