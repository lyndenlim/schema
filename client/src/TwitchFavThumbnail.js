import React, { useState, useEffect }  from 'react'
import axios from "axios"

function TwitchFavThumbnail({ favorite }) {
    const [streamerData, setStreamerData] = useState([])

    useEffect(async() => {

                const res3 = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${favorite.twitch_streamer}`, {
                  headers: {
                    Authorization: "Bearer 6gc86wnfd4e2z6wymi3rzgeczq0ppl",
                    "Client-Id": "yj62jo4k7wcs8xjg6xder4torg8m41"
                  }
                })
                setStreamerData(res3.data.data[0])
            //   } else if (!favorite.twitch_streamer && favorite.video_id && !favorite.stream_id) {
            //     const res4 = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${favorite.video_id}&maxResults=1&key=AIzaSyD9bB2_2ejQSoDyBcT8_6U6jo7g1bMMMwo`)
            //     setYoutubeTitle(res4.data.items[0].snippet.localized.title)
            //     setChannelTitle(res4.data.items[0].snippet.channelTitle)
            //     setVideoThumbnail(res4.data.items[0].snippet.thumbnails.high.url)

              // else {
              //   axios.get(`muxstream`)
              // }
    }, [])

    return (
        <>
            {favorite.twitch_streamer ? <img width="200px" height="200px" src={streamerData.thumbnail_url} alt="streamer-profile" /> : null}
            <p className="text-white">
                <strong>
                    {favorite.twitch_streamer ? streamerData.display_name : null}
                </strong>
            </p>
        </>
    )
}

export default TwitchFavThumbnail