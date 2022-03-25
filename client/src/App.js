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
import SearchResults from './SearchResults'

function App() {
  const [streams, setStreams] = useState([])
  const [allStreams, setAllStreams] = useState([])
  const [searchedStreams, setSearchedStreams] = useState([])
  const [searchedVideos, setSearchedVideos] = useState([])
  const [categoryStreams, setCategoryStreams] = useState([])
  const [categoryVideos, setCategoryVideos] = useState([])

  useEffect(async () => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=25"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=25"
    //NOTE: the bottom two urls fetches a 100 (max queries) of the streams each so they can be filtered to the search terms
    const AllScienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=100"
    const AllSoftwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=100"

    await axios.all([axiosInstance.get(softwareAndDevelopmentURL), axiosInstance.get(scienceAndTechURL),
    axiosInstance.get(AllScienceAndTechURL), axiosInstance.get(AllSoftwareAndDevelopmentURL)])
      .then(res => {
        setStreams([...res[0].data.data, res[1].data.data].flat())
        setAllStreams([...res[2].data.data, res[3].data.data].flat())
      })
  }, [])

  function handleSearch(search) {
    //filter allStreams so it only contains the streams that the user has searched
    const filteredStreams = allStreams.filter(stream => stream.title.toLowerCase().includes(search))
    setSearchedStreams(filteredStreams)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onSearch={handleSearch} setSearchedVideos={setSearchedVideos}/>
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
          <Route path="/results">
            <SearchResults searchedStreams={searchedStreams} searchedVideos={searchedVideos}/>
          </Route>
          <Route path="/streams/:id">
            <Stream />
          </Route>
          <Route path="/category/:name">
            <CategoryContent categoryStreams={categoryStreams} categoryVideos={categoryVideos} />
          </Route>
          <Route path="/videos/:id">
            <Video />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;