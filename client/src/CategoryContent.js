import React, { useState } from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function CategoryContent({ categoryStreams, categoryVideos }) {
  //FIX ISSUE ON REFRESH: on refresh nothing gets rendered...
  return (
    <>
      <strong>Streams</strong>
      {categoryStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      <strong>Videos</strong>
      {categoryVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
    </>
  )
}

export default CategoryContent