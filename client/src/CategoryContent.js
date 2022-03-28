import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function CategoryContent({allStreams}) {
  const [allVideos, setAllVideos] = useState([])
  const { name } = useParams()

  const filteredStreams = allStreams.filter(stream => {
    const streamTitle = stream.title.toLowerCase().split(/[ !js\[\]()-]/)
    // Revisit this filter, returns unreal/engine for every search
    return streamTitle.includes(name.toLowerCase()) || streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase())
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