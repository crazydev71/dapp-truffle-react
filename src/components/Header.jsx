import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import { initiateWeb3 } from '../actions/blockchain'

// component

class Header extends Component {
    componentWillMount(){
        console.log('test')
        initiateWeb3()
    }
    render(){
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
                    <NavItem>Old Example</NavItem>
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Header

/*export default function Header() {
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
                    <NavItem>Old Example</NavItem>
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}*/
