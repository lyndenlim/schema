import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

function Stream() {
    const [streams, setStreams] = useState([])
    const { id } = useParams()

    useEffect(async () => {
        const axiosInstance = axios.create({
            headers: {
                Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
                "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
            }
        });

        const scienceAndTechURL = `https://api.twitch.tv/helix/streams?game_id=509670&first=1&user_id=${id}`
        const softwareAndDevelopmentURL = `https://api.twitch.tv/helix/streams?game_id=1469308723&first=1&user_id=${id}`

        const res = await axios.all([axiosInstance.get(scienceAndTechURL), axiosInstance.get(softwareAndDevelopmentURL)])
        setStreams([...res[0].data.data, res[1].data.data].flat())
    }, [])

    if (!streams[0]) return null

    return (
        <div className="twitch-content">
            <iframe
                title={id}
                src={`https://player.twitch.tv/?channel=${streams[0].user_name}&parent=localhost`}
                width="1120px"
                height="600px"
                allow="fullscreen; autoplay"
            >
            </iframe>
            <iframe
                title={id}
                src={`https://www.twitch.tv/embed/${streams[0].user_name}/chat?parent=localhost`}
                height="600px"
                width="300px">
            </iframe>
        </div>
    )
}

export default Stream