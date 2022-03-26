import React, {useState} from "react"
import Modal from "react-bootstrap/Modal"

function AccountSettings() {
    const [usernameShow, setUsernameShow] = useState(false)
    const [emailShow, setEmailShow] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false)

    const handleUsernameClose = () => setUsernameShow(false)
    const handleUsernameShow = () => setUsernameShow(true)
    const handleEmailClose = () => setEmailShow(false)
    const handleEmailShow = () => setEmailShow(true)
    const handlePasswordClose = () => setPasswordShow(false)
    const handlePasswordShow = () => setPasswordShow(true)

  return (
    <div>
      <div>
        <h3>Account Settings</h3>
        <h5>Username</h5>
        <input disabled={true} value="PlaceholderPatrice" />
        <button onClick={handleUsernameShow}>Change username</button>
        <h5>Email</h5>
        <input disabled={true} value="Placeholder@Patrice.com" />
        <button onClick={handleEmailShow}>Change email</button> <br />
        <button onClick={handlePasswordShow}>Change Password</button>
      </div>

      <Modal show={usernameShow} onHide={handleUsernameClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input/>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleUsernameClose}>
            Close
          </button>
          <button onClick={handleUsernameClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={emailShow} onHide={handleEmailClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input/>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleEmailClose}>
            Close
          </button>
          <button onClick={handleEmailClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={passwordShow} onHide={handlePasswordClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Old password</label>
            <input type="password"/><br/>
            <label>New password</label>
            <input type="password"/><br/>
            <label>Confirm new password</label>
            <input type="password"/>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handlePasswordClose}>
            Close
          </button>
          <button onClick={handlePasswordClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default AccountSettings;
