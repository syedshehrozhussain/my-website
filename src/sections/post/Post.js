import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import SomeImage from '../../content/post1/image1.jpg';
import SomeTextUrl from '../../content/post1/text1.txt';
import SomePostDetails from '../../content/post1/data1.json';

function Post() {
    const [textBody, setTextBody] = useState('Loading text...');

    useEffect(() => {
        const getTextFromFile = async () => {
            let response = await fetch(SomeTextUrl);
            let text = await response.text();
            setTextBody(text);
        };
        getTextFromFile();
    }, [textBody]);

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
                            {textBody.split("\n").map((paragraph, key) => {
                                return <Card.Text key={key} dangerouslySetInnerHTML={{__html: paragraph}}></Card.Text>
                            })}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Post;