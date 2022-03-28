import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function TwitchThumbnail({ stream }) {
    const [thumbnail, setThumbnail] = useState("")
    const [language, setLanguage] = useState("")

    useEffect(() => {
        let resizedThumbnail = stream.thumbnail_url.split(/[{}]/)
        resizedThumbnail = resizedThumbnail[0] + "290" + resizedThumbnail[2] + "160" + resizedThumbnail[4]
        setThumbnail(resizedThumbnail)

        let fullLanguage = stream.language
        switch (fullLanguage) {
            case "en":
                setLanguage("English")
                break;
            case "es":
                setLanguage("Spanish")
                break;
            case "pt":
                setLanguage("Portuguese")
                break;
            case "fr":
                setLanguage("French")
                break;
            case "de":
                setLanguage("German")
                break;
            case "ru":
                setLanguage("Russian")
                break;
            case "tr":
                setLanguage("Turkish")
                break;
            case "da":
                setLanguage("Danish")
                break;
            case "it":
                setLanguage("Italian")
                break;
            case "pl":
                setLanguage("Polish")
                break;
            default:
                setLanguage(stream.language)
        }
    }, [])

    return (
        <div className="twitch-thumbnail" style={{ height: "310px", width: "290px" }}>
            <Link to={`/streams/${stream.user_id}`} style={{ textDecoration: "none", color: "black" }}>
                <img width="290px" height="160px" src={thumbnail} alt="twitch-thumbnail" />
                <p className="text-white"><strong>{stream.title.length < 25 ? stream.title : `${stream.title.slice(0, 30)}...`}</strong></p>
                <p className="text-white">{stream.user_name}</p>
                <p className="text-white">{stream.game_name}</p>
                <p className="text-white">{language}</p>
            </Link>
        </div>

    )
}

export default TwitchThumbnail