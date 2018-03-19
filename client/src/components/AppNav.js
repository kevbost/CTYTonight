import React from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const AppNav = ( props ) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass={NavLink} href="/viewer" to="/viewer">
          Viewer
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNav