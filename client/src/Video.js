import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import axios from 'axios';
import technologies from './technologies';

function Video({ user }) {
  const { id } = useParams()
  const [videoTitle, setVideoTitle] = useState("")

  useEffect(async () => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAP_e37kjSD1mbasiA3YoA24_y14uaDBgU`)
    setVideoTitle(res.data.items[0].snippet.title)
  }, [])

  function addVideo() {
    let selectedTech = technologies.find(technology => {
      let name = technology.name
      const selectedVideoTitle = videoTitle.toLowerCase().split(/[ !js\[\]()-]/)
      if (name.split(" ")[1]) {
        return selectedVideoTitle.includes(name.split(" ").join("").toLowerCase()) || selectedVideoTitle.includes(name.split(" ")[0].toLowerCase()) || (selectedVideoTitle.includes(name.split(" ")[0].toLowerCase()) && selectedVideoTitle.includes(name.split(" ")[1].toLowerCase()))
      } else if (name.split(" ")[0].toLowerCase() === "javascript") {
        return videoTitle.toLowerCase().split(" ").includes("javascript")
      } else if (name.split(" ")[0].toLowerCase() === "java") {
        return videoTitle.toLowerCase().split(" ").includes("java")
      } else if (name.split(" ")[0].toLowerCase() === "typescript") {
        return videoTitle.toLowerCase().split(" ").includes("typescript")
      } else {
          return selectedVideoTitle.includes(name.split(" ").join("").toLowerCase()) || selectedVideoTitle.includes(name.split(" ")[0].toLowerCase())
      }
    })

    axios.post("/favorites", {
      technology_id: selectedTech ? selectedTech.id : 22,
      user_id: user.id,
      video_id: id
    })
  }

  return (
    <div className="video-player">
      <iframe
        title={id}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1`}
        width="1120px"
        height="560px"
        allow="fullscreen; autoplay"
        frameBorder="0"
        style={{ border: "solid 4px #37474F" }}
      >
      </iframe>
      <br />
      {user ? <button className="video-follow-button" onClick={addVideo}><FontAwesomeIcon icon={faHeart} /> Favorite</button> : null}
    </div>
  )
}

export default Video