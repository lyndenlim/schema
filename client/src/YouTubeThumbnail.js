import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function YouTubeThumbnail({ video }) {
    const [thumbnail, setThumbnail] = useState()

    useEffect(() => {
        let resizedThumbnail = video
        console.log(resizedThumbnail)
        // resizedThumbnail = resizedThumbnail[0] + "290" + resizedThumbnail[2] + "160" + resizedThumbnail[4]
        setThumbnail(resizedThumbnail)
    }, [])

    return (
        <div style={{ width: "300px", height: "280px" }}>
            <Link to={`/streams/${video.user_id}`} style={{ textDecoration: "none", color: "black" }}>
                <img width="290px" height="160px" src={thumbnail} />
                <p><strong>{video.title.length < 25 ? video.title : `${video.title.slice(0, 30)}...`}</strong></p>
                <p>{video.user_name}</p>
                <p>{video.game_name}</p>
                <p>{video.language}</p>
            </Link>
        </div>

    )
}

export default YouTubeThumbnail