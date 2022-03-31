import React, { useState, useEffect } from "react"
import axios from "axios"
import TwitchFavThumbnail from "./TwitchFavThumbnail"
import YoutubeFavThumbnail from "./YoutubeFavThumbnail"

function FavoritePage() {
  const [filteredFavorites, setFilteredFavorites] = useState([])

  useEffect(async () => {
    const res1 = await axios.get("/favorites")
    const res2 = await axios.get("/me")
    setFilteredFavorites(res1.data.filter(favorite => favorite.user_id === res2.data.id))
  }, [])

  return (
    <>
      <div className="favorite-header"><h4 className="bold">Favorites</h4></div>
      <div className="favorite-container">
        {filteredFavorites.map(favorite => favorite.video_id ?<YoutubeFavThumbnail key={favorite.id} favorite={favorite} /> : <TwitchFavThumbnail key={favorite.id} favorite={favorite} />)}
      </div>
    </>
  )
}


export default FavoritePage