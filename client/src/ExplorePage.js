import React, { useState } from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage() {
  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} />)}
    </div>
  )
}

export default ExplorePage