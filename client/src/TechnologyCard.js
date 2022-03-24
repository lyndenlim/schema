import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

function TechnologyCard({ tech, streams , setCategoryStreams}) {

    function handleClick() {
        const filteredStreams = streams.filter(stream => { 
            const streamTitle = stream.title.toLowerCase().split(" ")
            return streamTitle.includes(tech.name.toLowerCase()) || streamTitle.includes("unreal") || streamTitle.includes("engine")
        })
        setCategoryStreams(filteredStreams)
    }


    return (
        <div>
            <Link to={`/category/${tech.name}`} style={{ textDecoration: "none", color: "black"}} onClick={handleClick}>
                <img style={{ width: "225px", height: "225px" }} src={tech.image} />
                {tech.name}
            </Link>
        </div>
    )
}

export default TechnologyCard