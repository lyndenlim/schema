import React, { useState, useEffect } from "react"
import axios from "axios"
import TwitchFavThumbnail from "./TwitchFavThumbnail"
import YouTubeFavThumbnail from "./YouTubeFavThumbnail"
import UserFavVideoThumbnail from "./UserFavVideoThumbnail"

function FavoritePage() {
  const [filteredFavorites, setFilteredFavorites] = useState([])


  useEffect(async () => {
    const res1 = await axios.get("/favorites")
    const res2 = await axios.get("/me")
    setFilteredFavorites(res1.data.filter(favorite => favorite.user_id === res2.data.id))
  }, [])

  function handleDelete(id) {
    setFilteredFavorites(filteredFavorites.filter(favorite => favorite.id !== id))
  }

    const filteredTwitchFav = filteredFavorites.filter(favorite => favorite.twitch_streamer)
    const filteredYoutubeFav = filteredFavorites.filter(favorite => favorite.video_id)
    const filteredUserFav = filteredFavorites.filter(favorite => favorite.stream_id)

  return (
    <>
      <div className="favorite-header"><h4 className="bold">Favorites</h4></div>
      <div className="favorite-container">
        <h5 className="text-white">User Streams</h5>
        <div className="favorite-category">
          <p className="text-white" style={{paddingLeft: "30px"}}>{filteredUserFav.length > 0 ? null : "No favorites here." }</p>
          {filteredUserFav.map(favorite => <UserFavVideoThumbnail key={favorite.id} favorite={favorite} playbackID={favorite.stream_id} onDelete={handleDelete} />)}
        </div>
        <h5 className="text-white">Twitch Streams</h5>
        <div className="favorite-category">
        <p className="text-white" style={{paddingLeft: "30px"}}>{filteredTwitchFav.length > 0 ? null : "No favorites here." }</p>
        {filteredTwitchFav.map(favorite => <TwitchFavThumbnail key={favorite.id} favorite={favorite} onDelete={handleDelete}/>)}
        </div>
        <h5 className="text-white">Youtube Videos</h5>
        <div className="favorite-category">
        <p className="text-white" style={{paddingLeft: "30px"}}>{filteredYoutubeFav.length > 0 ? null : "No favorites here." }</p>
        {filteredYoutubeFav.map(favorite => <YouTubeFavThumbnail key={favorite.id} favorite={favorite} onDelete={handleDelete}/>)}
        </div>
      </div>
    </>
  )
}


export default FavoritePage