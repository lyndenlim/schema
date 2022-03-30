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
      {filteredFavorites.map(favorite => <TwitchFavThumbnail key={favorite.id} favorite={favorite} />)}
      {filteredFavorites.map(favorite => <YoutubeFavThumbnail key={favorite.id} favorite={favorite} />)}
    </>
  )
}


export default FavoritePage