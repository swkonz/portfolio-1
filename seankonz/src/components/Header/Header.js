import React from 'react';
import './Header.css';

import logo from '../../assets/images/sk_logo.png';

import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
    return (
      <div>
        <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#home">
              SK
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default App;