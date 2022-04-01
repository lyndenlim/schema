import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchBar({ onSearch, setSearchedVideos }) {
    const [search, setSearch] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (search.length === 0) {
            return null
        } else {
            onSearch(search)
            history.push({
                pathname: "/results",
            })
            //NOTE: or the get request below, the maxResults have to be limited to 1 just in case it burns through the quota
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}+programming&maxResults=20&key=AIzaSyAP_e37kjSD1mbasiA3YoA24_y14uaDBgU`)
                .then(res => setSearchedVideos(res.data.items))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="searchbar" placeholder="Search for a stream/video" value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit" className="search-button" style={{ fontSize: "20px" }}><FontAwesomeIcon icon={faSearch}/></button>
            </form>

        </>
    )
}

export default SearchBar