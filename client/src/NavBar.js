import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from "./Searchbar"

function NavBar() {
  return (
    <Navbar>
      <Container>
        <div>
          <NavLink to="/">
            Schema (logo)
          </NavLink>
          <NavLink to="/favorites">
            Following
          </NavLink>
          <NavLink to="/explore">
            Explore
          </NavLink>
        </div>
        <div>
          <Searchbar />
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