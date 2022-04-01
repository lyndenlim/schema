import React, { useEffect } from 'react'
import TwitchThumbnail from "./TwitchThumbnail"
import TechnologyCard from "./TechnologyCard"
import technologies from "./technologies"
import UserVideoThumbnail from './UserVideoThumbnail'
import UserStreamThumbnail from './UserStreamThumbnail'
import StreamCarousel from "./StreamCarousel"

function Homepage({ streamPlaybackIDs, videoPlaybackIDs, scienceTechStreams, softwareDevStreams }) {
  useEffect(() => {
    let
      carousel = document.querySelector('.carousel'),
      figure = carousel.querySelector('figure'),
      nav = carousel.querySelector('nav'),
      numImages = 8,
      theta = 2 * Math.PI / numImages,
      currImage = 0
      ;
    nav.addEventListener('click', onClick, true);

    function onClick(e) {
      e.stopPropagation();

      var t = e.target;
      if (t.tagName.toUpperCase() != 'BUTTON')
        return;

      if (t.classList.contains('next')) {
        currImage++;
      }
      else {
        currImage--;
      }

      figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    }
  }, [])

  return (
    <>
      <div className="trending-header"><h5 className="text-white bold" style={{ fontSize: "30px" }}>Trending Streams</h5></div>
      <div className="carousel">
        <figure >
          {softwareDevStreams.slice(0, 4).map(stream => <StreamCarousel key={stream.id} stream={stream} />)}
          {scienceTechStreams.slice(0, 4).map(stream => <StreamCarousel key={stream.id} stream={stream} />)}
        </figure>
        <nav>
          <button className="nav prev text-white carousel-button">Prev</button>
          <button className="nav next text-white carousel-button">Next</button>
        </nav>
      </div>
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
        {technologies.slice(0,8).map(tech => {
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