import React from 'react'
import { Link } from "react-router-dom"

function TechnologyCard({ tech, streams }) {
    // const [filteredStreams, setFilteredStreams] = useState([])

    // useEffect(() => {
    //     setFilteredStreams(streams.filter(stream => stream.title.toLowerCase().split(" ").includes(tech.name)))
    // }, [])

    const filteredStreams = streams.filter(stream => stream.title.toLowerCase().split(" ").includes(tech.name))

    return (
        <Link to="/">
            <div>
                <img style={{ width: "225px", height: "225px" }} src={tech.image} />
                {tech.name}
            </div>
        </Link>
    )
}

export default TechnologyCard