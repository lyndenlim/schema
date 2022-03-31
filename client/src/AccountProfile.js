import React, { useState } from "react"
import default_avatar from "./default_avatar.png"

function AccountProfile({ currentUser }) {
  return (
    <div className="text-white centered">
      <h3>Account Profile</h3>
      <div>
        <img className="profile-picture"
          src={default_avatar}
          alt="profile-picture"
        />
        <br />
        <button>Add/Edit Profile Picture</button>
      </div>
    </div>
  );
}

export default AccountProfile;
