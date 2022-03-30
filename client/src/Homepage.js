import React from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"
import UserVideoThumbnail from './UserVideoThumbnail'

function Homepage({ streams, streamPlaybackIDs, videoPlaybackIDs }) {
  return (
    <>
      <h5 className="stream-header">Schema Streams</h5>
      <div className="homepage-container">
        {streamPlaybackIDs.length > 0 ? streamPlaybackIDs.map(playbackID => <div className="mux-thumbnail" key={playbackID}><img width="290px" height="160px" src={`https://image.mux.com/${playbackID}/thumbnail.png`} /></div>) : "No videos are available at this time"}
      </div>
      <h5 className="video-header">Schema Videos</h5>
      <div className="homepage-container">
        {videoPlaybackIDs.length > 0 ? videoPlaybackIDs.map(playbackID => <UserVideoThumbnail key={playbackID} playbackID={playbackID} />) : "No videos are available at this time"}
      </div>
      <h5 className="stream-header">Twitch Live Streams</h5>
      <div className="homepage-container">
        {streams.map(stream => <TwitchThumbnail key={stream.id} stream={stream} />)}
      </div>
      <br />
      <h5 className="text-white category-header">Top Categories</h5>
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