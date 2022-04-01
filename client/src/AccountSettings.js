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
  const [oldPassword, setOldPassword] = useState("")
  const [streamKey, setStreamKey] = useState("")


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
      old_password: oldPassword,
      password: inputPassword,
      password_confirmation: confirmPassword
    })
  }

  function handleDeleteAccount() {
    axios.delete(`/users/${currentUser.id}`)
  }

  function generateKey() {
    fetch("https://api.mux.com/video/v1/live-streams", {
      body: '{ "playback_policy": "public", "new_asset_settings": { "playback_policy": "public" }, "reconnect_window": 0 }',
      headers: {
        Authorization: "Basic NDEzNTZlZmYtZWFlZS00NGFkLWI4YWQtZTlkZmRhOWI1NDQyOmhZRm8za3ZsNmVya0hzeVliWnBocVBzUFpTTHp2dUF5djdzVm5FaFNUT2gyY3ZPVFpyTldGQllkaXRPWms3R2t1OHpON1BzMUp3cw==",
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setStreamKey(data.data.stream_key)
        // Doesnt function as intended
        // navigator.clipboard.writeText(streamKey)
        //   .then(alert("Stream key copied to clipboard"))
      })
  }

  return (
    <>
      <div className="text-white centered">
        <div>
          <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handleUsernameShow}>Change Username</button>
          <br />
          <br />
          <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handleEmailShow}>Change Email</button>
          <br />
          <br />
          <button className="setting-button" onClick={handlePasswordShow}>Change Password</button>
          <br />
          <br />
          <input className="stream-key-input" style={{ textAlign: "center" }} readOnly={true} value={streamKey}></input><button className="setting-button" style={{ marginLeft: "6px" }} onClick={generateKey}>Generate Stream Key</button>
          <br />
          <br />
          {/* add copy clipboard button  */}
          <button className="setting-button" style={{ backgroundColor: "red" }} onClick={handleDeleteAccount}>Delete Account</button>
        </div>



        <Modal show={usernameShow} onHide={handleUsernameClose} style={{ textAlign: "center" }}>
          <Modal.Header closeButton>
            <Modal.Title>Change username</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleUsernameChange}>
            <Modal.Body>
              <label>NEW USERNAME:</label>
              <input onChange={e => setInputUsername(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handleUsernameClose}>
                Close
              </button>
              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={emailShow} onHide={handleEmailClose} style={{ textAlign: "center" }}>
          <Modal.Header closeButton>
            <Modal.Title>Change email</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleEmailChange}>
            <Modal.Body>
              <label>NEW EMAIL:</label>
              <input onChange={e => setInputEmail(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handleEmailClose}>
                Close
              </button>
              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={passwordShow} onHide={handlePasswordClose} style={{ textAlign: "center" }}>
          <Modal.Header closeButton>
            <Modal.Title>Change password</Modal.Title>
          </Modal.Header>
          <form onSubmit={handlePasswordChange}>
            <Modal.Body>
              <label>OLD PASSWORD:</label>
              <input type="password" onChange={e => setOldPassword(e.target.value)} /><br />
              <label>NEW PASSWORD:</label>
              <input type="password" onChange={e => setInputPassword(e.target.value)} /><br />
              <label>CONFIRM NEW PASSWORD:</label>
              <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handlePasswordClose}>
                Close
              </button>
              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default AccountSettings;
