import React, { useState, useEffect } from 'react'

function Stream({ stream }) {
    const [thumbnail, setThumbnail] = useState()

    useEffect(() => {
        let resizedThumbnail = stream.thumbnail_url.split(/[{}]/)
        resizedThumbnail = resizedThumbnail[0] + "290" + resizedThumbnail[2] + "160" + resizedThumbnail[4]
        setThumbnail(resizedThumbnail)
    }, [])

    return (
        <div style={{width: "300px", height: "280px"}}>
            <img width="290px" height="160px" src={thumbnail} />
            <p><strong>{stream.title}</strong></p>
            <p>{stream.user_name}</p>
            <p>{stream.game_name}</p>

            <p>{stream.language}</p>
            {/* <iframe
                src={`https://player.twitch.tv/?channel=${stream.user_name}&parent=localhost&autoplay=false`}
                height="75%"
                width="25%"
                allowfullscreen>
            </iframe> */}
        </div>
    )
}

export default Stream