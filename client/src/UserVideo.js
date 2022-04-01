import React, { useEffect, useRef, useState } from "react"
import '@mux-elements/mux-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
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
            technology_id: 22,
            stream_id: id,
            user_id: userID
        })
    }

    return (
        <>
            <div className="mux-video-container" style={{ paddingTop: "100px" }}>
                <mux-video
                    controls
                    playback-id={id}
                    width="1120px"
                    height="500px"
                    autoplay={true}
                />
                <br />
                <div style={{ paddingTop: "10px" }}>
                    {user ? <button className="video-follow-button" onClick={addMuxVideo}><FontAwesomeIcon icon={faHeart} style={{ color: "#fb5d5e" }} /> FAVORITE</button> : null}
                </div>
                );
            </div>
        </>
    )
}

export default UserVideo