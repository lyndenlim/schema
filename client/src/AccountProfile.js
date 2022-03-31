import React, { useState } from "react"
import default_avatar from "./default_avatar.png"

function AccountProfile({ currentUser }) {
  return (
    <div className="text-white centered">
      <div>
        <img className="profile-picture"
          src={default_avatar}
          alt="profile-picture"
          style={{paddingBottom:"5px"}}
        />
        <br />
        <h4>{currentUser.username}</h4>
        <h4>{currentUser.email}</h4>
        <button className="setting-button">Add/Edit Profile Picture</button>
      </div>
    </div>
  );
}

export default AccountProfile;
