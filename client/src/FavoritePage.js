import React, { useState, useEffect } from "react"
import axios from "axios"
import TwitchFavThumbnail from "./TwitchFavThumbnail"
import YoutubeFavThumbnail from "./YoutubeFavThumbnail"

function FavoritePage({ }) {
  const [favorites, setFavorites] = useState([])
  const [userID, setUserID] = useState(null)
  const [ID, setID] = useState("")
  const [fav, setFav] = useState([])

  useEffect(async () => {
    const res1 = await axios.get("/favorites")
    setFavorites(res1.data)

    const res2 = await axios.get("/me")
    setUserID(res2.data.id)

    localStorage.setItem("myFav", JSON.stringify(res1.data))
    const myFav = JSON.parse(localStorage.getItem("myFav"))
    localStorage.setItem("myId", res2.data.id)
    const myID = localStorage.getItem("myId")

    setID(myID)
    setFav(myFav)
  }, [])

  const filteredFavorites = fav.filter(favorite => favorite.user_id === parseInt(ID))

  return (
    <>
      {filteredFavorites.map(favorite => <TwitchFavThumbnail key={favorite.id} favorite={favorite} />)}
      {filteredFavorites.map(favorite => <YoutubeFavThumbnail key={favorite.id} favorite={favorite} />)}
    </>
  )
}


export default FavoritePage