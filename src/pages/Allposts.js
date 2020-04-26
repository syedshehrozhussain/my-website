import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Allposts() {

    return (
        <>
            <Row className="mb-5 mt-3">
                <Col xs={{span: 8, offset: 2}}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center font-weight-bold">All Posts</Card.Title>
                            <Card.Text>All Post titles will be listed here. This section is still under construction. Hang tight.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Allposts;