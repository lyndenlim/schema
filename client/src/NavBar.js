import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from "./SearchBar"

function NavBar({ onSearch, user, setUser }) {
  console.log(user)
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Navbar>
      <Container>
        <div>
          <NavLink to="/" className="navbar-link text-white">
            Schema
          </NavLink>
          {user ? <NavLink to="/favorites" className="navbar-link text-white">Favorites</NavLink> : null}
          <NavLink to="/explore" className="navbar-link text-white">
            Explore
          </NavLink>
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div>
          {user ? (
            <>
              <button onClick={handleLogoutClick}>Logout</button>
              <NavLink to="/profile" style={{ textDecoration: "none", color: "black" }}>{<img src={user.profile_image_url ? user.profile_image_url : "stock avatar here"} alt="profile-picture" />}</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup" className="navbar-link text-white">Signup</NavLink>
              <NavLink to="/login" className="navbar-link text-white">Login</NavLink>
            </>
          )}

        </div>

      </Container>
    </Navbar>
  )
}

export default NavBar 