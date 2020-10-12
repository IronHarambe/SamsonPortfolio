import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* Main settings for navbar */}
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        {/* Logo */}
        <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
        {/* Responsive bar */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Collapsing navbar options */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
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
