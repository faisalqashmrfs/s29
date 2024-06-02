import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbarr() {
      return (
            <section className="NavBar-from-bootstrap">
                  <Navbar expand="lg" className="bg-body-tertiary">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <Nav.Link href="/Contact">Contact US</Nav.Link>
                                    <Link to={'/'}>Home</Link>
                              </Nav>
                        </Navbar.Collapse>
                  </Navbar>
            </section>
      )
}
