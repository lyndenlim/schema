import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({ streams }) {
  return (
    <>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} />)}
    </>
  )
}

export default ExplorePage