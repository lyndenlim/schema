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
import UserStream from './UserStream'
import UserVideo from './UserVideo'

function App() {
  const [allStreams, setAllStreams] = useState([])
  const [searchedStreams, setSearchedStreams] = useState([])
  const [searchedVideos, setSearchedVideos] = useState([])
  const [user, setUser] = useState(null)
  const [streamPlaybackIDs, setStreamPlaybackIDs] = useState([])
  const [videoPlaybackIDs, setVideoPlaybackIDs] = useState([])
  const [scienceTechStreams, setScienceTechStreams] = useState([])
  const [softwareDevStreams, setSoftwareDevStreams] = useState([])

  useEffect(async () => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    const axiosInstance1 = axios.create({
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
        "Client-Id": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    });

    const scienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=25"
    const softwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=25"
    const allScienceAndTechURL = "https://api.twitch.tv/helix/streams?game_id=509670&first=100"
    const allSoftwareAndDevelopmentURL = "https://api.twitch.tv/helix/streams?game_id=1469308723&first=100"

    const res = await axios.all([axiosInstance1.get(softwareAndDevelopmentURL), axiosInstance1.get(scienceAndTechURL),
    axiosInstance1.get(allScienceAndTechURL), axiosInstance1.get(allSoftwareAndDevelopmentURL)])
    setSoftwareDevStreams(res[0].data.data)
    setScienceTechStreams(res[1].data.data)
    setAllStreams([...res[2].data.data, res[3].data.data].flat())

    const res2 = await axios.get(`/mux_streams?api_key=${process.env.REACT_APP_MUX_KEY}`)
    setStreamPlaybackIDs(res2.data.data.map(stream => stream.playback_ids[0].id))

    const res3 = await axios.get(`/mux_videos?api_key=${process.env.REACT_APP_MUX_KEY}`)
    setVideoPlaybackIDs(res3.data.data.map(video => video.playback_ids[0].id))
  }, [])

  function handleSearch(search) {
    const filteredStreams = allStreams.filter(stream => stream.title.toLowerCase().includes(search))
    setSearchedStreams(filteredStreams)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onSearch={handleSearch} user={user} setUser={setUser} setSearchedVideos={setSearchedVideos} />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <Homepage
              streamPlaybackIDs={streamPlaybackIDs}
              videoPlaybackIDs={videoPlaybackIDs}
              softwareDevStreams={softwareDevStreams}
              scienceTechStreams={scienceTechStreams}
            />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/favorites">
            <FavoritePage />
          </Route>
          <Route path="/profile">
            <AccountPage user={user} setUser={setUser} />
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
            <Stream user={user} />
          </Route>
          <Route path="/userstreams/:id">
            <UserStream user={user} />
          </Route>
          <Route path="/uservideos/:id">
            <UserVideo user={user} />
          </Route>
          <Route path="/category/:name">
            <CategoryContent allStreams={allStreams} />
          </Route>
          <Route path="/videos/:id">
            <Video user={user} videoPlaybackIDs={videoPlaybackIDs} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;