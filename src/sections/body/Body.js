import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Body() {
    return (
        <Container fluid className="p-0">
            <Jumbotron>
                <Row>
                    <Col>
                        <h1 className="d-flex justify-content-center">
                            Welcome!
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="d-flex justify-content-center">
                            This blog is currently under construction. Please check back again soon!
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}

export default Body;