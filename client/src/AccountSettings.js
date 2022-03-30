import React, { useState } from "react"
import axios from "axios"
import Modal from "react-bootstrap/Modal"

function AccountSettings({ currentUser }) {
  const [usernameShow, setUsernameShow] = useState(false)
  const [emailShow, setEmailShow] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleUsernameClose = () => setUsernameShow(false)
  const handleUsernameShow = () => setUsernameShow(true)
  const handleEmailClose = () => setEmailShow(false)
  const handleEmailShow = () => setEmailShow(true)
  const handlePasswordClose = () => setPasswordShow(false)
  const handlePasswordShow = () => setPasswordShow(true)

  function handleUsernameChange(e) {
    // e.preventDefault()
    handleUsernameClose()
    axios.patch(`/users/${currentUser.id}`, {
      username: inputUsername
    })
  }

  function handleEmailChange(e) {
    // e.preventDefault()
    handleEmailClose()
    axios.patch(`/users/${currentUser.id}`, {
      email: inputEmail
    })
  }

  function handlePasswordChange(e) {
    e.preventDefault()
    handlePasswordClose()
    axios.patch(`/users/${currentUser.id}`, {
      password: inputPassword,
      password_confirmation: confirmPassword
    })
  }

  function handleDeleteAccount() {
    axios.delete(`/users/${currentUser.id}`)
  }

  return (
    <>
      <div className="text-white centered">
        <div>
          <h5>Username</h5>
          <input disabled={true} placeholder={currentUser.username} />
          <button onClick={handleUsernameShow}>Change Username</button>
          <br />
          <br />
          <h5>Email</h5>
          <input disabled={true} placeholder={currentUser.email} />
          <button onClick={handleEmailShow}>Change Email</button>
          <br />
          <br />
          <button onClick={handlePasswordShow}>Change Password</button>
          <br />
          <br />
          <button onClick={handleDeleteAccount}>Delete Account</button>
          <br />
          <br />
          <h4>Get Stream Key</h4>
          <input disabled={true}></input><button>Generate Key</button>
        </div>

        <Modal show={usernameShow} onHide={handleUsernameClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change username</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleUsernameChange}>
            <Modal.Body>
              <input onChange={e => setInputUsername(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleUsernameClose}>
                Close
              </button>
              <input type="submit"></input>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={emailShow} onHide={handleEmailClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change email</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleEmailChange}>
            <Modal.Body>
              <input onChange={e => setInputEmail(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handleEmailClose}>
                Close
              </button>
              <input type="submit"></input>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={passwordShow} onHide={handlePasswordClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change username</Modal.Title>
          </Modal.Header>
          <form onSubmit={handlePasswordChange}>
            <Modal.Body>
              <label>Old password</label>
              <input type="password" /><br />
              <label>New password</label>
              <input type="password" onChange={e => setInputPassword(e.target.value)} /><br />
              <label>Confirm new password</label>
              <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handlePasswordClose}>
                Close
              </button>
              <input type="submit"></input>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default AccountSettings;
