import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.scss"

function Header() {
  return (
    <div className="header">
      {/* Main settings for navbar */}
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="nav">
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo">Portfolio</Navbar.Brand>
        {/* Responsive bar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
        {/* Collapsing navbar options */}
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto" ></Nav>
          <Nav>
            <Nav.Link href="#deets">ABOUT</Nav.Link>
            <Nav.Link href="#deets">PROJECTS</Nav.Link>
            <Nav.Link href="#deets">SKILLS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
