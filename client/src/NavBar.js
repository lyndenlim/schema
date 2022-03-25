import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from "./SearchBar"

function NavBar() {
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
          <SearchBar />
        </div>
        <NavLink to="/profile">
          <div>
            Account icon
          </div>
        </NavLink>
      </Container>
    </Navbar>
  )
}

export default NavBar 