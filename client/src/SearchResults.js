import React from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function SearchResults({ searchedStreams, searchedVideos }) {
  return (
    <>
      <div className="centered">
        <strong className="text-white">{searchedStreams.length > 0 ? "Streams" : "No one is streaming at the moment"}</strong>
      </div>
      <div className="homepage-container">
        {searchedStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <div className="centered">
        <strong className="text-white">Videos</strong>
      </div>
      <div className="homepage-container">
        <strong>Videos</strong>
        {searchedVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
      </div>
    </>
  )
}

export default SearchResults