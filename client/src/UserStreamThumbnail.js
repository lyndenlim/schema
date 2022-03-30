import React from 'react'
import { Link } from "react-router-dom"

function UserStreamThumbnail({ playbackID }) {
    function handleError(e) {
        e.target.src = "https://www.dbadocket.org/wp-content/uploads/2017/12/INACTIVE.jpg"
    }
    return (
        <div className="mux-thumbnail" >
            <Link to={`/userstreams/${playbackID}`} style={{ textDecoration: "none", color: "black" }}>
                <img width="290px" height="160px" src={`https://image.mux.com/${playbackID}/thumbnail.png`} onError={handleError} alt="mux-thumbnail" />
            </Link>
        </div>
    )
}

export default UserStreamThumbnail