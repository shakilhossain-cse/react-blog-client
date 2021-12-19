import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          REACT BLOG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="fs-5 text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" className="fs-5 text-dark">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="contact" className="fs-5 text-dark">
              Contact
            </Nav.Link>
            <NavDropdown title={<FaUserCircle className="fs-2"/>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="login">Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
