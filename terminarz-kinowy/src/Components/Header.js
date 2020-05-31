import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Terminarz kinowy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Start</Nav.Link>
                    <NavDropdown title="Kina" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Kino/Spis">Spis</NavDropdown.Item>
                        <NavDropdown.Item href="/Kino/Dodaj">Dodaj Kino</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Pomoc/Kino">Pomoc</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Seanse" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Seans/Spis">Spis</NavDropdown.Item>
                        <NavDropdown.Item href="/Seans/Dodaj">Dodaj Seans</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Pomoc/Seans">Pomoc</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/Pomoc">Pomoc</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;