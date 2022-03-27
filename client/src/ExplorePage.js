import React from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage() {
  return (
    <div className="explore-category-container">
      {technologies.map(tech => {
        return (
          <TechnologyCard
            key={tech.name}
            tech={tech} />
        )
      })}
    </div>
  )
}

export default ExplorePage