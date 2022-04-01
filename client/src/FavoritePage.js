import React, { useState, useEffect } from "react"
import axios from "axios"
import TwitchFavThumbnail from "./TwitchFavThumbnail"
import YouTubeFavThumbnail from "./YouTubeFavThumbnail"
import UserVideoThumbnail from "./UserVideoThumbnail"

function FavoritePage() {
  const [filteredFavorites, setFilteredFavorites] = useState([])

  useEffect(async () => {
    const res1 = await axios.get("/favorites")
    const res2 = await axios.get("/me")
    setFilteredFavorites(res1.data.filter(favorite => favorite.user_id === res2.data.id))
  }, [])

  const filteredElements = filteredFavorites.map(favorite => {
    if (favorite.stream_id) {
      return <UserVideoThumbnail key={favorite.id} playbackID={favorite.stream_id}/>
    } else if (favorite.video_id) {
      return <YouTubeFavThumbnail key={favorite.id} favorite={favorite} />
    } else {
      return <TwitchFavThumbnail key={favorite.id} favorite={favorite} />
    }
  })

  return (
    <>
      <div className="favorite-header"><h4 className="bold">Favorites</h4></div>
      <div className="favorite-container">
        {filteredElements.length > 0 ? filteredElements : "You have no favorites."}
      </div>
    </>
  )
}


export default FavoritePage