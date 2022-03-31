import React, { useEffect, useRef, useState } from "react"
import '@mux-elements/mux-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { useParams } from "react-router-dom";
import axios from "axios";

function UserVideo({ user }) {
    const { id } = useParams()
    const [userID, setUserID] = useState("")

    useEffect(async () => {
        const res = await axios.get("/me")
        setUserID(res.data.id)
    })

    function addMuxVideo() {
        axios.post("/favorites", {
            technology_id: 23,
            stream_id: id,
            user_id: userID
        })
    }

    return (
        <>
            <div className="mux-video-container">
                <mux-video
                    controls
                    playback-id={id}
                    width="1120px"
                    height="560px"
                    autoplay={true}
                />
                <br />
                {user ? <button className="video-follow-button" onClick={addMuxVideo}><FontAwesomeIcon icon={faHeart} /> Favorite</button> : null}

                );
            </div>
        </>
    )
}

export default UserVideo