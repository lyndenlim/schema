import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"

function AccountProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h3>Account Profile</h3>
      <div>
        <h5>Profile Picture</h5>
        <img className="profile-picture"
          src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp"
        />
        <button>Add/Edit Profile Picture</button>
        <h5>Bio</h5>
        <p>Lynden is my soulmate.</p>
        <button onClick={handleShow}>Change Bio</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Bio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea rows="4" cols="50"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
          <button onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AccountProfile;
