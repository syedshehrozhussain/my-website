import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
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
        </Navbar>
    );
}

export default Header;
