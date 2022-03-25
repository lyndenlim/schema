import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"

function SearchBar({onSearch, setSearchedVideos}) {
    const [search, setSearch] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(search)
        history.push({
            pathname: "/results",
        })
        //NOTE: or the get request below, the maxResults have to be limited to 1 just in case it burns through the quota
        // axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}+programming&maxResults=1&key=AIzaSyD9bB2_2ejQSoDyBcT8_6U6jo7g1bMMMwo`)
        // .then(res => setSearchedVideos(res.data.items))
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search for a stream/video" value={search} onChange={e => setSearch(e.target.value)}/>
            <input type="submit" />
        </form>

        </>
    )
}

export default SearchBar