import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from "./SearchBar"

function NavBar({onSearch, setSearchedVideos}) {
  return (
    <Navbar>
      <Container>
        <div>
          <NavLink to="/" className="navbar-link">
            Schema
          </NavLink>
          <NavLink to="/favorites" className="navbar-link">
            Following
          </NavLink>
          <NavLink to="/explore" className="navbar-link">
            Explore
          </NavLink>
        </div>
        <div>
          <SearchBar onSearch={onSearch} setSearchedVideos={setSearchedVideos}/>
        </div>
        <div>
        <NavLink to="signup">
          Sign Up
        </NavLink>
        <NavLink to="login">
          Log In
        </NavLink>
        <NavLink to="/profile">
            Account icon
        </NavLink>
        </div>

      </Container>
    </Navbar>
  )
}

export default NavBar 