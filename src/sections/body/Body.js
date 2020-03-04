import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Body() {
    return (
        <Container fluid>
            <Jumbotron>
                <h1>Hello, Everyone!</h1>
                <p>
                    This page is currently under construction. Check back soon!
                </p>
            </Jumbotron>
        </Container>
    );
}

export default Body;