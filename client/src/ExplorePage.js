import React, { useState } from 'react'
import TechnologyCard from "./TechnologyCard"

function ExplorePage() {
  const [technologies, setTechnologies] = useState(["Unreal Engine", "Unity", "C", "C#", "C++", "Java", "JavaScript", "TypeScript", "Ruby", "Ruby on Rails", "React", "Vue", "Angular", "Python", "Go", "Golang", "Node", "Express", "HTML", "CSS", "SQL", "Swift", "Kotlin"])

  return (
    <div>
      {technologies.map(tech => <TechnologyCard key={tech} tech={tech} />)}
    </div>
  )
}

export default ExplorePage