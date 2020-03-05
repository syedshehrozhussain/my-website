import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <img
                    src="./apple-touch-icon.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />{' '}
                Shehroz's Thoughts
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Latest Post</Nav.Link>
                    <Nav.Link href="#link">Previous Posts</Nav.Link>
                </Nav>
                <Navbar.Text>
                    About: <a href="#link">This Blog</a> | <a href="#link">Me</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
