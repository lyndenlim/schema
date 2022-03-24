import React, { useState } from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function CategoryContent({ categoryStreams, categoryVideos }) {

  //FIX ISSUE ON REFRESH: on refresh nothing gets rendered...
  return (
    <>
      {categoryStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      {categoryVideos.map(video => <YouTubeThumbnail key={video.id} video={video} />)}
    </>
  )
}

export default CategoryContent