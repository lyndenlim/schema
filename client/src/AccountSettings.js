import React, { useState } from "react"
import axios from "axios"
import Modal from "react-bootstrap/Modal"
import { useHistory } from "react-router-dom"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

function AccountSettings({ currentUser, user, setUser }) {
  const [usernameShow, setUsernameShow] = useState(false)
  const [emailShow, setEmailShow] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [inputUsername, setInputUsername] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")
  const [streamKey, setStreamKey] = useState("")
  const [clipboard, setClipboard] = useState("Click to copy to clipboard!")
  const history = useHistory()


  const handleUsernameClose = () => setUsernameShow(false)
  const handleUsernameShow = () => setUsernameShow(true)
  const handleEmailClose = () => setEmailShow(false)
  const handleEmailShow = () => setEmailShow(true)
  const handlePasswordClose = () => setPasswordShow(false)
  const handlePasswordShow = () => setPasswordShow(true)
  const handleDeleteClose = () => setDeleteShow(false)
  const handleDeleteShow = () => setDeleteShow(true)


  function handleUsernameChange(e) {
    // e.preventDefault()
    axios.patch(`/users/${currentUser.id}`, {
      username: inputUsername
    })
  }

  function handleEmailChange(e) {
    // e.preventDefault()
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
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        history.push("/")
      }
    })
  }

  function generateKey() {
    fetch("https://api.mux.com/video/v1/live-streams", {
      body: '{ "playback_policy": "public", "new_asset_settings": { "playback_policy": "public" }, "reconnect_window": 0 }',
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_MUX_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setStreamKey(data.data.stream_key)
        navigator.clipboard.writeText(data.data.stream_key)
        setClipboard("Copied!")
        setTimeout(() => setClipboard("Click to copy to clipboard!"), 3000)
      })
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {clipboard}
    </Tooltip>
  );

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
          <input className="stream-key-input" style={{ textAlign: "center" }} readOnly={true} value={streamKey}></input>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}><button className="setting-button" style={{ marginLeft: "6px" }} onClick={generateKey}>Generate Stream Key</button></OverlayTrigger>
          <br />
          <br />
          <button className="setting-button" style={{ backgroundColor: "red" }} onClick={handleDeleteShow}>Delete Account</button>
        </div>

        <Modal show={usernameShow} onHide={handleUsernameClose} style={{ textAlign: "center" }} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Change username</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleUsernameChange}>
            <Modal.Body>
              <InputGroup>
                <InputGroup.Text>New Username</InputGroup.Text>
                <FormControl onChange={e => setInputUsername(e.target.value)} />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={emailShow} onHide={handleEmailClose} style={{ textAlign: "center" }} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Change email</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleEmailChange}>
            <Modal.Body>
              <InputGroup>
                <InputGroup.Text>New Email</InputGroup.Text>
                <FormControl onChange={e => setInputEmail(e.target.value)} />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={passwordShow} onHide={handlePasswordClose} style={{ textAlign: "center" }} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Change password</Modal.Title>
          </Modal.Header>
          <form onSubmit={handlePasswordChange}>
            <Modal.Body>
              <InputGroup style={{padding: "10px"}}>
                <InputGroup.Text>Old Password</InputGroup.Text>
                <FormControl type="password" onChange={e => setOldPassword(e.target.value)} /><br />
              </InputGroup>
              <InputGroup style={{padding: "10px"}}>
                <InputGroup.Text>New Password</InputGroup.Text>
                <FormControl type="password" onChange={e => setInputPassword(e.target.value)} /><br />
              </InputGroup>
              <InputGroup style={{padding: "10px"}}>
                <InputGroup.Text>Confirm password</InputGroup.Text>
                <FormControl type="password" onChange={e => setConfirmPassword(e.target.value)} /><br />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>

              <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal show={deleteShow} onHide={handleDeleteClose} style={{ textAlign: "center" }} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete this account?</Modal.Title>
          </Modal.Header>
            <Modal.Footer>
              <button className="setting-button" style={{ marginLeft: "6px" }} onClick={handleDeleteClose}>
                Close
              </button>
              <button className="setting-button" style={{ marginLeft: "6px", background: "red" }} onClick={handleDeleteAccount}>Delete Account</button>
            </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AccountSettings;
