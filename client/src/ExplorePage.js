import React, { useState } from 'react'
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function ExplorePage({streams}) {
  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams}/>)}
    </div>
  )
}

export default ExplorePage