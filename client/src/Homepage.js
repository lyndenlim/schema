import React from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage({ streams }) {
  return (
    <>
      <div className="homepage-container">
        {streams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <br />
      <div className="homepage-category-container">
        {technologies.map(tech => {
          return (
            <TechnologyCard
              key={tech.name}
              tech={tech} />
          )
        })}
      </div>
    </>
  )
}

export default Homepage