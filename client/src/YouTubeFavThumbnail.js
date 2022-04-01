import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function YouTubeFavThumbnail({ favorite, onDelete }) {
  const [youtubeTitle, setYoutubeTitle] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [videoThumbnail, setVideoThumbnail] = useState("");

  useEffect(async () => {
    //IF NO IF STATEMENT THIS ERROR OCCURS BUT CODE WORKS:
    // YouTubeFavThumbnail.js:14 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'snippet')
    const res4 = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${favorite.video_id}&maxResults=1&key=AIzaSyAP_e37kjSD1mbasiA3YoA24_y14uaDBgU`
    );
    setYoutubeTitle(res4.data.items[0].snippet.localized.title);
    setChannelTitle(res4.data.items[0].snippet.channelTitle);
    setVideoThumbnail(res4.data.items[0].snippet.thumbnails.high.url);

  }, [])

  function handleDelete() {
    axios.delete(`/favorites/${favorite.id}`)
    onDelete(favorite.id)
}

  return (
    <Link to={`/videos/${favorite.video_id}`} style={{ textDecoration: "none" }}>
      <div className="favorite-thumbnail">
        {favorite.video_id ? <img
          width="290px"
          height="200px"
          src={videoThumbnail}
          alt="video-thumbnail"
        /> : null}
        <p className="text-white">
          {favorite.video_id ? <strong>
            {youtubeTitle.length < 25
              ? youtubeTitle
              : `${youtubeTitle.slice(0, 25)}...`}
          </strong> : null}
        </p>
        <p className="text-white">{favorite.video_id ? channelTitle : null}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </Link>
  );
}

export default YouTubeFavThumbnail;
