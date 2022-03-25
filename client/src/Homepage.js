import React from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage({ streams, setCategoryStreams, setCategoryVideos }) {
  return (
    <>
      <div>{streams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}</div>
      <div>
        {technologies.map(tech => {
          return (<TechnologyCard
            key={tech.name}
            tech={tech}
            streams={streams}
            setCategoryStreams={setCategoryStreams}
            setCategoryVideos={setCategoryVideos} />)
        })}
      </div>
    </>
  )
}

export default Homepage