import React, {useState, useEffect} from "react"
import axios from "axios"

function FavoritePage() {
  const [favorites, setFavorites] = useState([])
  const [userID, setUserID] = useState(null)

  useEffect(() => {
      axios.get("/favorites")
      .then(res => setFavorites(res.data))

      axios.get("/me")
      .then(res => setUserID(res.data.id))
  }, [])

  const filteredFavorites = favorites.filter(favorite => favorite.id === userID)
  console.log(filteredFavorites)

  return (
   <div>
   </div>
  )
}


export default FavoritePage