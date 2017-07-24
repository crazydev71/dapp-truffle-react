import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

// component
export default function Header() {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">DAO as a Service</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                  <LinkContainer to="/">
                    <NavItem>DAO Admin</NavItem>
                  </LinkContainer>
                    <LinkContainer to="/token">
                    <NavItem>Token Example</NavItem>
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
