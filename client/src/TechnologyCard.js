import React from 'react'

function TechnologyCard({ tech }) {
    return (
        <div>
            <img style={{width: "225px", height: "225px"}}src={tech.image} />
            {tech.name}
        </div>
    )
}

export default TechnologyCard