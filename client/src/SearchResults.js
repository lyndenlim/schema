import React from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function SearchResults({ searchedStreams, searchedVideos }) {
  return (
    <div>
      <strong>Streams</strong>
      {searchedStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      <strong>Videos</strong>
      {searchedVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
    </div>
  )
}

export default SearchResults