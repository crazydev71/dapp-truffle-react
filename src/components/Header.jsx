import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


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

                    <LinkContainer to="/selected">
                        <NavItem>Selected DAO</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/token">
                        <NavItem>Old Example</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/transfer">
                        <NavItem>Token Transfer Event</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
