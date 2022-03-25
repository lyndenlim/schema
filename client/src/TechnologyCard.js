import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

function TechnologyCard({ tech, streams, setCategoryVideos }) {
    function handleClick() {
        const filteredStreams = streams.filter(stream => {
            const streamTitle = stream.title.toLowerCase().split(/[ !js]/)
            return streamTitle.includes(tech.name.toLowerCase()) || streamTitle.includes("unreal") || streamTitle.includes("engine")
        })

        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${tech.name}+programming&maxResults=20&key=AIzaSyD9bB2_2ejQSoDyBcT8_6U6jo7g1bMMMwo`)
            .then(res => setCategoryVideos(res.data.items))
    }

    return (
        <div>
            <Link to={`/category/${tech.name}`} style={{ textDecoration: "none", color: "black" }} onClick={handleClick}>
                <img width="225px" height="225px" src={tech.image} />
                {tech.name}
            </Link>
        </div>
    )
}

export default TechnologyCard