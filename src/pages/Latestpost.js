import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Latestposts() {
    return (
        <>
            <Row className="mb-5 mt-3">
                <Col xs={{span: 8, offset: 2}}>
                    <Card>
                        {/* <Card.Img variant="top" src={image} /> */}
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center font-weight-bold">Latest Post</Card.Title>
                            <Card.Text>This section will only show the latest post, so it will be easy to just find the latest content</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Latestposts;