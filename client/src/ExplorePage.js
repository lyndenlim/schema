import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({ streams, videos, setCategoryStreams, setCategoryVideos }) {

  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} videos={videos} setCategoryStreams={setCategoryStreams} setCategoryVideos={setCategoryVideos}/>)}
    </div>
  )
}

export default ExplorePage