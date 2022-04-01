import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons"

function UserVideoThumbnail({ favorite, playbackID, onDelete }) {
    function handleDelete() {
        axios.delete(`/favorites/${favorite.id}`)
        onDelete(favorite.id)
    }

    return (
        <div>
            <div className="mux-thumbnail" >
                <Link to={`/uservideos/${playbackID}`} style={{ textDecoration: "none", color: "black" }}>
                    <img width="290px" height="160px" src={`https://image.mux.com/${playbackID}/thumbnail.png`} alt="mux-thumbnail" />
                </Link>
            </div>
            <button onClick={handleDelete} style={{ background: "transparent", border: "none" }}><FontAwesomeIcon icon={faHeartBroken} style={{ color: "#fb5d5e" }} /></button>
        </div>
    )
}

export default UserVideoThumbnail