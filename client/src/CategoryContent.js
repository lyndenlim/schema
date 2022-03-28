import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function CategoryContent() {
  const [allStreams, setAllStreams] = useState([])
  const [allVideos, setAllVideos] = useState([])
  const { name } = useParams()

  useEffect(async () => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    //NOTE: the bottom two urls fetches a 100 (max queries) of the streams each so they can be filtered to the search terms
    const allScienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=100"
    const allSoftwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=100"

    await axios.all([axiosInstance.get(allScienceAndTechURL), axiosInstance.get(allSoftwareAndDevelopmentURL)])
      .then(res => {
        setAllStreams([...res[0].data.data, res[1].data.data].flat())
      })
  }, [])

  const filteredStreams = allStreams.filter(stream => {
    const streamTitle = stream.title.toLowerCase().split(/[ !js\[\]()-]/)
    // Revisit this filter, returns unreal/engine for every search
    return streamTitle.includes(name.toLowerCase()) 
    // || (streamTitle.includes("unreal") && streamTitle.includes("engine"))
  })

  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}+programming&maxResults=20&key=AIzaSyD9bB2_2ejQSoDyBcT8_6U6jo7g1bMMMwo`)
      .then(res => setAllVideos(res.data.items))
  }, [])

  return (
    <>
      <div className="centered">
        <strong className="text-white">{filteredStreams.length > 0 ? "Streams" : "No one is streaming at the moment"}</strong>
      </div>
      <div className="homepage-container">
        {filteredStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <br />
      <div className="centered">
        <strong className="text-white">Videos</strong>
      </div>
      <div className="homepage-container">
        {allVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
      </div>
    </>
  )
}

export default CategoryContent