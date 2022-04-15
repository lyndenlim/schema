import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from "@fortawesome/fontawesome-free-regular"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import technologies from './technologies';

function Stream({ user }) {
    const [streams, setStreams] = useState([])
    const { id } = useParams()
    const [favorited, setFavorited] = useState(false)
    const favoriteIcon = favorited ? faHeart : farHeart
    const favoriteColor = favorited ? "#fb5d5e" : "black"

    useEffect(async () => {
        const axiosInstance = axios.create({
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
                "Client-Id": process.env.REACT_APP_TWITCH_CLIENT_ID
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
            } else if (name.split(" ")[0].toLowerCase() === "javascript") {
                return streams[0].title.toLowerCase().split(" ").includes("javascript")
            } else if (name.split(" ")[0].toLowerCase() === "java") {
                return streams[0].title.toLowerCase().split(" ").includes("java")
            } else if (name.split(" ")[0].toLowerCase() === "typescript") {
                return streams[0].title.toLowerCase().split(" ").includes("typescript")
            } else {
                return streamTitle.includes(name.split(" ").join("").toLowerCase()) || streamTitle.includes(name.split(" ")[0].toLowerCase())
            }
        })

        axios.post("/favorites", {
            technology_id: selectedTech ? selectedTech.id : 22,
            user_id: user.id,
            twitch_streamer: streams[0].user_name
        })
        .catch(function (error) {
            alert(error.response.data.errors[0].substring(5));
          });
        setFavorited(true)
    }

    if (!streams[0]) return null

    return (
        <div className="twitch-content" style={{ paddingTop: "100px" }}>
            <div>
                <iframe
                    title={id}
                    src={`https://player.twitch.tv/?channel=${streams[0].user_name}&parent=https://schema-project.herokuapp.com`}
                    width="1120px"
                    height="500px"
                    allow="fullscreen; autoplay"
                >
                </iframe>
                <br />
                {user ? <div style={{ textAlign: "center", paddingTop: "10px" }}><button className="stream-follow-button" onClick={addStreamer}><FontAwesomeIcon icon={favoriteIcon} style={{ color: favoriteColor }} /> FOLLOW</button> </div> : null}
            </div>
            <iframe
                title={id}
                src={`https://www.twitch.tv/embed/${streams[0].user_name}/chat?parent=https://schema-project.herokuapp.com`}
                height="500px"
                width="300px">
            </iframe>
        </div>
    )
}

export default Stream