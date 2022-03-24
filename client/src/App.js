import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import axios from "axios"
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import AccountPage from "./AccountPage"
import FavoritePage from "./FavoritePage"
import ExplorePage from "./ExplorePage"
import Stream from "./Stream"
import CategoryContent from "./CategoryContent"
import Video from './Video'

function App() {
  const [streams, setStreams] = useState([])
  const [categoryStreams, setCategoryStreams] = useState([])
  const [categoryVideos, setCategoryVideos] = useState([])

  useEffect(async () => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=1"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=18"

    await axios.all([axiosInstance.get(scienceAndTechURL), axiosInstance.get(softwareAndDevelopmentURL)])
      .then(res => {
        setStreams([...res[0].data.data, res[1].data.data].flat())
      })
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <Homepage streams={streams} setCategoryStreams={setCategoryStreams} setCategoryVideos={setCategoryVideos} />
          </Route>
          <Route path="/explore">
            <ExplorePage streams={streams} setCategoryStreams={setCategoryStreams} setCategoryVideos={setCategoryVideos} />
          </Route>
          <Route path="/favorites">
            <FavoritePage />
          </Route>
          <Route path="/profile">
            <AccountPage />
          </Route>
          <Route path="/streams/:id">
            <Stream />
          </Route>
          <Route path="/category/:name">
            <CategoryContent categoryStreams={categoryStreams} categoryVideos={categoryVideos} />
          </Route>
          <Route path="/video/:id">
            <Video />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;