import React, {useState, useEffect} from 'react'
import axios from "axios"
import AccountProfile from './AccountProfile'
import AccountSettings from './AccountSettings'

function AccountPage() {
  const [currentUser, setCurrentUser] = useState([])


  useEffect(() => {
    axios.get("/me")
    .then(res => setCurrentUser(res.data))
  }, [])

  return (
    <div>
      <AccountProfile currentUser={currentUser}/>
      <AccountSettings currentUser={currentUser}/>
    </div>
  )
}

export default AccountPage