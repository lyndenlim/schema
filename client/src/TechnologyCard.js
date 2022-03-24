import React from 'react'
import { Link } from "react-router-dom"

function TechnologyCard({ tech, streams, videos, setCategoryStreams, setCategoryVideos }) {

    function handleClick() {
        const filteredStreams = streams.filter(stream => {
            const streamTitle = stream.title.toLowerCase().split(/[ !js]/)
            return streamTitle.includes(tech.name.toLowerCase()) || streamTitle.includes("unreal") || streamTitle.includes("engine")
        })
        const filteredVideos = videos.filter(video => {
            const videoTitle = video.title.toLowerCase().split(/[ !js]/)
            return videoTitle.includes(tech.name.toLowerCase()) || videoTitle.includes("unreal") || videoTitle.includes("engine")
        })
        setCategoryStreams(filteredStreams)
        setCategoryVideos(filteredVideos)
    }

    return (
        <div>
            <Link to={`/category/${tech.name}`} style={{ textDecoration: "none", color: "black" }} onClick={handleClick}>
                <img style={{ width: "225px", height: "225px" }} src={tech.image} />
                {tech.name}
            </Link>
        </div>
    )
}

export default TechnologyCard