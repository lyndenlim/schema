import React, { useEffect, useRef } from "react"
import '@mux-elements/mux-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { useParams } from "react-router-dom";
import axios from "axios";

function UserVideo({ user }) {
    const { id } = useParams()

    async function addMuxVideo() {
        const res = await axios.get("/me")

        axios.post("/favorites", {
            technology_id: 23,
            stream_id: id,
            user_id: res.id
        })
    }

    return (
        <>
            <div className="mux-video-container">
                <mux-video
                    controls
                    // needs to be fetched from mux api
                    playback-id={id}
                    width="1120px"
                    height="560px"
                // playsInline
                // ref={videoEl}
                />
                <br />
                {user ? <button className="video-follow-button" onClick={addMuxVideo}><FontAwesomeIcon icon={faHeart} /> Favorite</button> : null}

                );
            </div>
        </>
    )
}

export default UserVideo