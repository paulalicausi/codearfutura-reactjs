import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return(
        <Navbar className="menu">
            <Container>
                <Navbar.Brand href="/">Paula Licausi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;