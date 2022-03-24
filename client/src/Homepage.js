import React, {useState, useEffect} from 'react'
import axios from "axios"
import Thumbnail from "./Thumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"

function Homepage({ streams, videos, setCategoryStreams, setCategoryVideos}) {



  return (
    <>
      <div>{streams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}</div>
      <div>{technologies.map(tech => <TechnologyCard key={tech.name} tech={tech} streams={streams} videos={videos} setCategoryStreams={setCategoryStreams} setCategoryVideos={setCategoryVideos}/>)}</div>

    </>
  )
}

export default Homepage