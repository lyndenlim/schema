import React from 'react'

function TwitchFavThumbnail({ displayName, streamerProfile }) {
    return (
        <>
            <img width="200px" height="200px" src={streamerProfile} alt="streamer-profile" />
            <p className="text-white">
                <strong>
                    {displayName}
                </strong>
            </p>
        </>
    )
}

export default TwitchFavThumbnail