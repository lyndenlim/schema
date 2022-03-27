import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage() {
  return (
    <>
      {technologies.map(tech => {
        return (
          <TechnologyCard
            key={tech.name}
            tech={tech} />
        )
      })}
    </>
  )
}

export default ExplorePage