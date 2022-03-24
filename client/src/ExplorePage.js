import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({ streams, setCategoryStreams  }) {

  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} setCategoryStreams={setCategoryStreams} />)}
    </div>
  )
}

export default ExplorePage