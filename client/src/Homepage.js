import React, { useEffect, useState } from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"
import axios from "axios"

function Homepage({ streams }) {
  const [playbackIDs, setPlaybackIDs] = useState([])
  const [videoIDs, setVideoIDs] = useState([])

  useEffect(async () => {
    const axiosInstance = axios.create({
      headers: {
        // access: 41356eff-eaee-44ad-b8ad-e9dfda9b5442
        // secret token: hYFo3kvl6erkHsyYbZphqPsPZSLzvuAyv7sVnEhSTOh2cvOTZrNWFBYditOZk7Gku8zN7Ps1Jws
        Authorization: "Basic NDEzNTZlZmYtZWFlZS00NGFkLWI4YWQtZTlkZmRhOWI1NDQyOmhZRm8za3ZsNmVya0hzeVliWnBocVBzUFpTTHp2dUF5djdzVm5FaFNUT2gyY3ZPVFpyTldGQllkaXRPWms3R2t1OHpON1BzMUp3cw==",
        "Content-Type": "application/json"
      }
    });
    const res = await axiosInstance.get("https://api.mux.com/video/v1/live-streams")
    setPlaybackIDs(res.data.data.map(stream => stream.playback_ids[0].id))

    const res2 = await axiosInstance.get("https://api.mux.com/video/v1/assets")
    setVideoIDs(res2.data.data.map(video => video.id))
  }, [])

  console.log(videoIDs)

  return (
    <>
      <div className="stream-header">Schema Streams</div>
      <div className="homepage-container">
        {playbackIDs.length > 0 ? playbackIDs.map(playbackID => <img key={playbackID} src={"https://png.pngitem.com/pimgs/s/533-5330690_patrick-star-patricio-bobesponja-banda-corridos-patrick-star.png"} alt="stream-image" />) : "No one is currently streaming"}
      </div>
      <div className="stream-header">Schema Videos</div>
      <div className="homepage-container">
        {videoIDs.length > 0 ? videoIDs.map(videoID => <img key={videoID} src={"https://png.pngitem.com/pimgs/s/533-5330690_patrick-star-patricio-bobesponja-banda-corridos-patrick-star.png"} alt="video-image" />) : "No one is currently streaming"}
      </div>
      <div className="stream-header">Twitch Live Streams</div>
      <div className="homepage-container">
        {streams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <br />


      <div className="homepage-category-container bold">
        {technologies.map(tech => {
          return (
            <TechnologyCard
              key={tech.name}
              tech={tech} />
          )
        })}
      </div>
    </>
  )
}

export default Homepage