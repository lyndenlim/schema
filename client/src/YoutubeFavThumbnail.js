import React from 'react'

function YoutubeFavThumbnail({ youtubeTitle, channelTitle, videoThumbnail }) {
    return (
        <>
            <img width="200px" height="200px" src={videoThumbnail} alt="video-thumbnail" />
            <p className="text-white">
                <strong>
                    {youtubeTitle.length < 25 ? youtubeTitle : `${youtubeTitle.slice(0, 25)}...`}
                </strong>
            </p>
            <p className="text-white">{channelTitle}</p>
        </>
    )
}

export default YoutubeFavThumbnail