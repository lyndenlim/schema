import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function CategoryContent({ allStreams }) {
  const [allVideos, setAllVideos] = useState([])
  const { name } = useParams()

  const filteredStreams = allStreams.filter(stream => {
    const streamTitle = stream.title.toLowerCase().split(/[ !js\[\]()-]/)
    if (name.split(" ")[1] && name !== "Miscellaneous") {
      return streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase()) || (streamTitle.includes(name.split(" ")[0].toLowerCase()) && streamTitle.includes(name.split(" ")[1].toLowerCase()))
    } else if (!name.split(" ")[1] && name !== "Miscellaneous") {
      return streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase())
    } else {
      return true
    }
  })

  useEffect(async () => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${name}+programming&maxResults=20&key=AIzaSyAP_e37kjSD1mbasiA3YoA24_y14uaDBgU`)
    setAllVideos(res.data.items)
  }, [])

  return (
    <>
      <div className="centered">
        <strong className="text-white">{filteredStreams.length > 0 ? <h4 className="bold">Streams</h4> : <div><h4 className="bold">Streams</h4><br /><br /><h6>No one is currently streaming</h6></div>}</strong>
      </div>
      <div className="homepage-container">
        {filteredStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <div className="centered">
        <h4 className="text-white bold">Videos</h4>
      </div>
      <div className="homepage-container">
        {allVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
      </div>
    </>
  )
}

export default CategoryContent