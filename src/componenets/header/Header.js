/* Navbar for the website, to navigate to other pages */
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
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#skill">SKILLS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
