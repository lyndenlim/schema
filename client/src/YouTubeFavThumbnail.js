import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"
import technologies from "./technologies";
import secret from "./secret";

function YouTubeFavThumbnail({ favorite, onDelete }) {
  const [youtubeTitle, setYoutubeTitle] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [videoThumbnail, setVideoThumbnail] = useState("");

  useEffect(async () => {
    const res4 = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${favorite.video_id}&maxResults=1&key=${secret.youTubeKey}`
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
    <div>
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
          <p className="text-white">{technologies[favorite.technology_id - 1].name}</p>
        </div>
      </Link>
      <button onClick={handleDelete} style={{ background: "transparent", border: "none" }}><FontAwesomeIcon icon={faHeartBroken} style={{ color: "#fb5d5e" }} /></button>
    </div>
  );
}

export default YouTubeFavThumbnail;
