import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';

const Menu = () => {
  return (
  <div class="mb-3">
      <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/list-products">Prodotti</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
};

export default Menu;
