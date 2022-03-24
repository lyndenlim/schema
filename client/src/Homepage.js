import React from 'react'
import Thumbnail from "./Thumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage({ streams, setCategoryStreams }) {

  return (
    <>
      <div>{streams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}</div>
      <div>{technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} setCategoryStreams={setCategoryStreams} />)}</div>
    </>
  )
}

export default Homepage