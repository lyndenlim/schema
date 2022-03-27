import React from 'react'
import { Link } from "react-router-dom"

function YouTubeThumbnail({ video }) {
    return (
        <>
            <Link to={`/videos/${video.id.videoId}`} style={{ textDecoration: "none", color: "black" }}>
                <img width="290px" height="160px" src={video.snippet.thumbnails.high.url} alt="youtube-thumbnail" />
                <p className="text-white"><strong>{video.snippet.title.length < 25 ? video.snippet.title : `${video.snippet.title.slice(0, 30)}...`}</strong></p>
                <p className="text-white">{video.snippet.channelTitle}</p>
            </Link>
        </>
    )
}

export default YouTubeThumbnail