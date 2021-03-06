import React from 'react'
import { Link } from "react-router-dom"

function UserVideoThumbnail({ playbackID }) {
    return (
        <div>
            <div className="mux-thumbnail" >
                <Link to={`/uservideos/${playbackID}`} style={{ textDecoration: "none", color: "black" }}>
                    <img width="290px" height="160px" src={`https://image.mux.com/${playbackID}/thumbnail.png`} alt="mux-thumbnail" />
                </Link>
            </div>
        </div>
    )
}

export default UserVideoThumbnail