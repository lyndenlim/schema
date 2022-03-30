import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import technologies from './technologies';

function Stream({ user }) {
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

    function addStreamer() {
        let selectedTech = technologies.find(technology => {
            let name = technology.name
            const streamTitle = streams[0].title.toLowerCase().split(/[ !js\[\]()-]/)
            if (name.split(" ")[1]) {
                return streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase()) || (streamTitle.includes(name.split(" ")[0].toLowerCase()) && streamTitle.includes(name.split(" ")[1].toLowerCase()))
            } else {
                return streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase())
            }
        })
        
        axios.post("/favorites", {
            technology_id: selectedTech ? selectedTech.id : 23,
            user_id: user.id,
            twitch_streamer: streams[0].user_name
        })
    }

    if (!streams[0]) return null

    return (
        <div className="twitch-content">
            <div>
                <iframe
                    title={id}
                    src={`https://player.twitch.tv/?channel=${streams[0].user_name}&parent=localhost`}
                    width="1120px"
                    height="560px"
                    allow="fullscreen; autoplay"
                >
                </iframe>
                <br />
                {user ? <button className="stream-follow-button" onClick={addStreamer}><FontAwesomeIcon icon={faHeart} /> Follow</button> : null}
            </div>
            <iframe
                title={id}
                src={`https://www.twitch.tv/embed/${streams[0].user_name}/chat?parent=localhost`}
                height="560px"
                width="300px">
            </iframe>
        </div>
    )
}

export default Stream