import React from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YoutubeThumbnail from './YouTubeThumbnail'

function CategoryVideo({ categoryStreams }) {

//FIX ISSUE ON REFRESH: on refresh nothing gets rendered...

  return (
    <>
      {categoryStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
    </>
  )
}

export default CategoryVideo