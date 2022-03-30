import React, { useState, useEffect } from 'react'
import axios from "axios"

function TwitchFavThumbnail({ favorite }) {
    const [streamerData, setStreamerData] = useState([])

    useEffect(async () => {

        const res3 = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${favorite.twitch_streamer}`, {
            headers: {
                Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
                "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
            }
        })
        setStreamerData(res3.data.data[0])
    }, [])

    return (
        <>
            {favorite.twitch_streamer ? <img width="200px" height="200px" src={streamerData.thumbnail_url} alt="streamer-profile" /> : null}
            <p className="text-white">
                <strong>
                    {favorite.twitch_streamer ? streamerData.display_name : null}
                </strong>
            </p>
        </>
    )
}

export default TwitchFavThumbnail