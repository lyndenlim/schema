import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import axios from "axios"
import NavBar from "./NavBar"
import Homepage from "./Homepage"
import AccountPage from "./AccountPage"
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage'
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
  const [user, setUser] = useState(null)

  const [faves, setFaves] = useState([])
  const [userID, setUserID] = useState(null)
  const [filteredFavorites, setFilteredFavorites] = useState([])
  const [displayName, setDisplayName] = useState("")
  const [streamerProfile, setStreamerProfile] = useState("")
  const [youtubeTitle, setYoutubeTitle] = useState("")
  const [channelTitle, setChannelTitle] = useState("")
  const [videoThumbnail, setVideoThumbnail] = useState("")

  useEffect(async () => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    const axiosInstance = axios.create({
      headers: {
        Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
        "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=25"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=25"
    //NOTE: the bottom two urls fetches a 100 (max queries) of the streams each so they can be filtered to the search terms
    const allScienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=100"
    const allSoftwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=100"

    const res = await axios.all([axiosInstance.get(softwareAndDevelopmentURL), axiosInstance.get(scienceAndTechURL),
    axiosInstance.get(allScienceAndTechURL), axiosInstance.get(allSoftwareAndDevelopmentURL)])
    setStreams([...res[0].data.data, res[1].data.data].flat())
    setAllStreams([...res[2].data.data, res[3].data.data].flat())

    const res1 = await axios.get('/favorites')
    setFaves(res1.data)

    const res2 = await axios.get("/me")
    setUserID(res2.data.id)

    setFilteredFavorites(faves.filter(favorite => favorite.user_id === userID))
    //request1
    //request2
    // set all your state
    // pass EVERYTHING AT ONCE as props to Favorite page

  }, [])

  function handleSearch(search) {
    //filter allStreams so it only contains the streams that the user has searched
    const filteredStreams = allStreams.filter(stream => stream.title.toLowerCase().includes(search))
    setSearchedStreams(filteredStreams)
  }

  if (faves.length === 0) return (
    <div>
      <h1 style={{ color: '#fff' }}>LOADING</h1>
    </div>
  )

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onSearch={handleSearch} user={user} setUser={setUser} />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <Homepage streams={streams} />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/favorites">
            <FavoritePage filteredFavorites={filteredFavorites} />
          </Route>
          <Route path="/profile">
            <AccountPage/>
          </Route>
          <Route path="/signup">
            <SignUpPage setUser={setUser} />
          </Route>
          <Route path="/login">
            <LoginPage setUser={setUser} />
          </Route>
          <Route path="/results">
            <SearchResults searchedStreams={searchedStreams} searchedVideos={searchedVideos} />
          </Route>
          <Route path="/streams/:id">
            <Stream />
          </Route>
          <Route path="/category/:name">
            <CategoryContent allStreams={allStreams} />
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