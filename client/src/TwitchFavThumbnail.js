import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"
import technologies from './technologies'
import secret from './secret'

function TwitchFavThumbnail({ favorite, onDelete }) {
    const [streamerData, setStreamerData] = useState([])

    useEffect(async () => {
        const res3 = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${favorite.twitch_streamer}`, {
            headers: {
                Authorization: `Bearer ${secret.twitchAccessToken}`,
                "Client-Id": secret.twitchClientID
            }
        })
        setStreamerData(res3.data.data[0])
    }, [])

    function handleDelete() {
        axios.delete(`/favorites/${favorite.id}`)
        onDelete(favorite.id)
    }

    return (
        <div>
            {streamerData.is_live ?
                <Link to={`/streams/${streamerData.id}`} style={{ textDecoration: "none" }}>
                    <div className="favorite-thumbnail">
                        {favorite.twitch_streamer ? <img width="200px" height="200px" src={streamerData.thumbnail_url} alt="streamer-profile" /> : null}
                        <p className="text-white">
                            <strong>
                                {favorite.twitch_streamer ? streamerData.display_name : null}
                            </strong>
                        </p>
                        <p className="text-white">{technologies[favorite.technology_id - 1].name}</p>
                        <p className="text-white">LIVE</p>
                    </div>
                </Link>
                :
                <div className="favorite-thumbnail">
                    {favorite.twitch_streamer ? <img width="200px" height="200px" src={streamerData.thumbnail_url} alt="streamer-profile" /> : null}
                    <p className="text-white">
                        <strong>
                            {favorite.twitch_streamer ? streamerData.display_name : null}
                        </strong>
                    </p>
                    <p className="text-white">{technologies[favorite.technology_id - 1].name}</p>
                    <p className="text-white">OFFLINE</p>
                </div>
            }
            <button onClick={handleDelete} style={{ background: "transparent", border: "none" }}><FontAwesomeIcon icon={faHeartBroken} style={{ color: "#fb5d5e", fontSize: "25px" }} /></button>
        </div>



    )
}

export default TwitchFavThumbnail