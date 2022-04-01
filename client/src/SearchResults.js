import React from 'react'
import TwitchThumbnail from './TwitchThumbnail'
import YouTubeThumbnail from './YouTubeThumbnail'

function SearchResults({ searchedStreams, searchedVideos }) {
  return (
    <div style={{paddingTop: "100px"}}>
      <div className="centered">
        {searchedStreams.length > 0 ? <h4 className="bold text-white">Streams</h4> : <div><h4 className="bold text-white">Streams</h4><h6 className="text-white none-streaming">No one is currently streaming</h6></div>}
      </div>
      <div className="homepage-container">
        {searchedStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <div className="centered">
        <h4 className="text-white bold">Videos</h4>
      </div>
      <div className="homepage-container">
        {searchedVideos.map(video => <YouTubeThumbnail key={video.etag} video={video} />)}
      </div>
    </div>
  )
}

export default SearchResults