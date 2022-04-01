import React, { useState, useEffect } from 'react'
import axios from "axios"
import AccountProfile from './AccountProfile'
import AccountSettings from './AccountSettings'

function AccountPage({user, setUser}) {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(async () => {
    const res = await axios.get("/me")
    setCurrentUser(res.data)
  }, [])

  return (
    <div style={{ paddingTop: "100px" }}>
      <AccountProfile currentUser={currentUser} />
      <AccountSettings currentUser={currentUser} user={user} setUser={setUser} />
    </div>
  )
}

export default AccountPage