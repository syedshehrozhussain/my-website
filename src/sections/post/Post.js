import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SomeImage from '../../content/0/0.jpg';
import SomeText from '../../content/1/1.txt';
import SomePostDetails from '../../content/1/1.json';


function Post() {
    return (
        <>
            <Row className="mb-3">
                <Col xs={{span: 4, offset: 4}}>
                    <Image src={SomeImage} fluid rounded/>
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 10, offset: 1}}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center">{SomePostDetails.title}</Card.Title>
                            <Card.Text>
                                {SomePostDetails.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Post;