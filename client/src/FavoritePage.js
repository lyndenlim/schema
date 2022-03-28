import React, { useState, useEffect } from "react"
import axios from "axios"
import TwitchThumbnail from "./TwitchThumbnail"

function FavoritePage({ streams }) {
  const [favorites, setFavorites] = useState([])
  const [userID, setUserID] = useState(null)
  const [displayName, setDisplayName] = useState("")
  const [streamerProfile, setStreamerProfile] = useState("")
  const [youtubeTitle, setYoutubeTitle] = useState("")
  const [channelTitle, setChannelTitle] = useState("")
  const [videoThumbnail, setVideoThumbnail] = useState("")

  useEffect(() => {
    axios.get("/favorites")
      .then(res => setFavorites(res.data))

    axios.get("/me")
      .then(res => setUserID(res.data.id))
  }, [])

  useEffect(() => {
    const filteredFavorites = favorites.filter(favorite => favorite.user_id === userID)
    filteredFavorites.map(favorite => {
      console.log(favorite)
      if (favorite.twitch_streamer !== null && favorite.video_id === null && favorite.stream_id === null) {
        axios.get(`https://api.twitch.tv/helix/search/channels?query=${favorite.twitch_streamer}`, {
          headers: {
            Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
            "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
          }
        })
          .then(res => {
            setDisplayName(res.data.data[0].display_name)
            setStreamerProfile(res.data.data[0].thumbnail_url)
          })
      } else if (favorite.twitch_streamer === null && favorite.video_id !== null && favorite.stream_id === null) {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=KGbHtuP03r0&maxResults=1&key=AIzaSyD9bB2_2ejQSoDyBcT8_6U6jo7g1bMMMwo`)
          .then(res => {
            setYoutubeTitle(res.data.items[0].snippet.localized.title)
            setChannelTitle(res.data.items[0].snippet.channelTitle)
            setVideoThumbnail(res.data.items[0].snippet.thumbnails.high)
          })
      } 
      // else {
      //   axios.get(`muxstream`)
      // }
    })
  },[])

  return (
    <div>
      {/* <TwitchThumbnail /> */}
    </div>
  )
}


export default FavoritePage