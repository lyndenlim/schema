import React from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"
import UserVideoThumbnail from './UserVideoThumbnail'
import UserStreamThumbnail from './UserStreamThumbnail'

function Homepage({ streamPlaybackIDs, videoPlaybackIDs, scienceTechStreams, softwareDevStreams }) {
  return (
    <>
      <h5 className="stream-header">Schema Streams</h5>
      <div className="homepage-container">
        {streamPlaybackIDs.length > 0 ? streamPlaybackIDs.map(playbackID => <UserStreamThumbnail key={playbackID} playbackID={playbackID} />) : <div className="none-streaming"><h6 className="text-white">No one is currently streaming</h6></div>}
      </div>
      <h5 className="video-header">Schema Videos</h5>
      <div className="homepage-container">
        {videoPlaybackIDs.length > 0 ? videoPlaybackIDs.map(playbackID => <UserVideoThumbnail key={playbackID} playbackID={playbackID} />) : <div className="none-streaming"><h6 className="text-white">No videos are available at this time</h6></div>}
      </div>
      <h5 className="stream-header">Game and Software Development Streams</h5>
      <div className="homepage-container">
        {softwareDevStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <h5 className="stream-header">Science and Technology Streams</h5>
      <div className="homepage-container">
        {scienceTechStreams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <h5 className="category-header">Top Categories</h5>
      <div className="homepage-category-container bold">
        {technologies.map(tech => {
          return (
            <TechnologyCard
              key={tech.name}
              tech={tech} />
          )
        })}
      </div>
    </>
  )
}

export default Homepage