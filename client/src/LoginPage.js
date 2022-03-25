import React from 'react'

function LoginPage() {
  return (
    <>
    <h5>Log In</h5>
    <form>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" />
    </form>
    </>
  )
}

export default LoginPage