import React, { useEffect, useState } from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"
import axios from "axios"

function Homepage({ streams }) {
  const [streamPlaybackIDs, setStreamPlaybackIDs] = useState([])
  const [videoPlaybackIDs, setVideoPlaybackIDs] = useState([])

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
    setStreamPlaybackIDs(res.data.data.map(stream => stream.playback_ids[0].id))

    const res2 = await axiosInstance.get("https://api.mux.com/video/v1/assets")
    setVideoPlaybackIDs(res2.data.data.map(video => video.playback_ids[0].id))
  }, [])

  return (
    <>
      <div className="stream-header">Schema Streams</div>
      <div className="homepage-container">
        {streamPlaybackIDs.length > 0 ? streamPlaybackIDs.map(playbackID => <div className="mux-thumbnail"><img key={playbackID} width="290px" height="160px" src={"https://png.pngitem.com/pimgs/s/533-5330690_patrick-star-patricio-bobesponja-banda-corridos-patrick-star.png"} alt="stream-image" /></div>) : "No one is currently streaming"}
      </div>
      <div className="stream-header">Schema Videos</div>
      <div className="homepage-container">
        {videoPlaybackIDs.length > 0 ? videoPlaybackIDs.map(playbackID => <div className="mux-thumbnail"><img key={playbackID} width="290px" height="160px" src={`https://image.mux.com/${playbackID}/thumbnail.png`} /></div>) : "No videos are available at this time"}
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