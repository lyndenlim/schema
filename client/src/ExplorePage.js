import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({ streams, setCategoryStreams, setCategoryVideos }) {
  return (
    <>
      {technologies.map(tech => {
        return (<TechnologyCard
          key={tech.name}
          tech={tech}
          streams={streams}
          setCategoryStreams={setCategoryStreams}
          setCategoryVideos={setCategoryVideos} />)
      })}
    </>
  )
}

export default ExplorePage