import React, { useState, useEffect } from "react"
import axios from "axios"
import default_avatar from "./default_avatar.png"
import Modal from "react-bootstrap/Modal"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

function AccountProfile({ currentUser }) {
  const [imageShow, setImageShow] = useState(false)
  const [inputImage, setInputImage] = useState("")
  const [displayImage, setDisplayImage] = useState("")

  const handleImageClose = () => setImageShow(false)
  const handleImageShow = () => setImageShow(true)

  function handleImageChange(e) {
    // e.preventDefault()
    handleImageClose()
    axios.patch(`/users/${currentUser.id}`, {
      profile_image_url: inputImage
    })
  }

  useEffect(async () => {
    const res = await axios.get("/me")
    setDisplayImage(res.data.profile_image_url)
  }, [])

  return (
    <div className="text-white centered">
      <div>
        <img className="profile-picture"
          src={displayImage ? displayImage : default_avatar}
          alt="profile-picture"
          style={{ paddingBottom: "5px", width: "150px", height: "150px" }}
        />
        <br />
        <h4>{currentUser.username}</h4>
        <h4>{currentUser.email}</h4>
        <button className="setting-button" onClick={handleImageShow}>Add/Edit Profile Picture</button>
      </div>

      <Modal show={imageShow} onHide={handleImageClose} style={{ textAlign: "center" }} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleImageChange}>
          <Modal.Body>
            <InputGroup>
            <InputGroup.Text>New Profile Picture</InputGroup.Text>
            <FormControl onChange={e => setInputImage(e.target.value)} />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <button className="setting-button" style={{ marginLeft: "6px", background: "#94B49F" }} type="submit">Save Changes</button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>


  );
}

export default AccountProfile;
