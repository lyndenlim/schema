import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom"

function UserVideoThumbnail({ favorite, onDelete }) {

    function handleDelete() {
        axios.delete(`/favorites/${favorite.id}`)
        onDelete(favorite.id)
    }

    return (
        <div className="mux-thumbnail" >
            <Link to={`/uservideos/${favorite.stream_id}`} style={{ textDecoration: "none", color: "black" }}>
                <img width="290px" height="160px" src={`https://image.mux.com/${favorite.stream_id}/thumbnail.png`} alt="mux-thumbnail" />
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UserVideoThumbnail