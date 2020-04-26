import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import text from '../content/aboutblog/text.txt';
// import image from '../content/aboutblog/image.jpg';

function Aboutme() {
    const [textBody, setTextBody] = useState('Loading text...');

    useEffect(() => {
        const getTextFromFile = async () => {
            const aboutMeText = text;
            let response = await fetch(aboutMeText);
            let textBody = await response.text();
            setTextBody(textBody);
        };
        getTextFromFile();
    }, [textBody]);

    return (
        <>
            <Row className="mb-5 mt-3">
                <Col xs={{span: 8, offset: 2}}>
                    <Card>
                        {/* <Card.Img variant="top" src={image} /> */}
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center font-weight-bold">About This Blog</Card.Title>
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

export default Aboutme;