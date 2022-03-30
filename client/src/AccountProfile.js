import React, { useState } from "react"
import axios from "axios"
import Modal from "react-bootstrap/Modal"

function AccountProfile({ currentUser }) {
  const [show, setShow] = useState(false)
  const [inputBio, setInputBio] = useState("")

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handleBioChange(e) {
    // e.preventDefault()
    handleClose()
    axios.patch(`/users/${currentUser.id}`, {
      description: inputBio
    })
  }

  return (
    <div className="text-white centered">
      <h3>Account Profile</h3>
      <div>
        <img className="profile-picture"
          src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp"
          alt="profile-picture"
        />
        <br />
        <button>Add/Edit Profile Picture</button>
        <h5>Bio</h5>
        <p>{currentUser.description}</p>
        <button onClick={handleShow}>Change Bio</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Bio</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleBioChange}>
          <Modal.Body>
            <textarea rows="4" cols="50" onChange={e => setInputBio(e.target.value)}></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>
              Close
            </button>
            <input type="submit"></input>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default AccountProfile;
