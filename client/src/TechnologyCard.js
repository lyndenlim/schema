import React from 'react'
import { Link } from "react-router-dom"

function TechnologyCard({ tech }) {
    return (
        <div className="technology-card">
            <Link to={`/category/${tech.name}`} style={{ textDecoration: "none", color: "black" }} onClick={null}>
                <img className="rounded-img" width="225px" height="225px" src={tech.image} alt="technology" />
                <br />
                <span className="text-white" style={{fontSize:"18px"}}>{tech.name}</span>
            </Link>
        </div>
    )
}

export default TechnologyCard