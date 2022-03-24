import React from 'react'
import Thumbnail from './Thumbnail'

function CategoryContent({ categoryStreams, categoryVideos }) {

//FIX ISSUE ON REFRESH: on refresh nothing gets rendered...

  return (
    <>
      {categoryStreams.map(stream => <Thumbnail key={stream.id} stream={stream} />)}
      {categoryVideos.map(video=> <Thumbnail key={video.id} video={video} />)}
    </>
  )
}

export default CategoryContent