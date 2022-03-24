import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({ streams, setCategoryStreams, setCategoryVideos }) {

  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} setCategoryStreams={setCategoryStreams} setCategoryVideos={setCategoryVideos} />)}
    </div>
  )
}

export default ExplorePage