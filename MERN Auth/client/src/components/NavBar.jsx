import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="loginreg">MERN Auth</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/loginreg">Login & Registration</Nav.Link>
          <Nav.Link href="/userInfo">User Info</Nav.Link>
          <Nav.Link href="/test">Cookie Test</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar