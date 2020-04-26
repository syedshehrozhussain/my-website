import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Post(props) {
    const [textBody, setTextBody] = useState('Loading text...');

    useEffect(() => {
        const getTextFromFile = async () => {
            let response = await fetch(props.text);
            let text = await response.text();
            setTextBody(text);
        };
        getTextFromFile();
    }, [textBody, props.text]);

    return (
        <>
            <Row className="mb-5 mt-3">
                <Col xs={{span: 8, offset: 2}}>
                    <Card>
                    <Card.Img variant="top" src={props.image} />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-center font-weight-bold">{props.data.title}</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted font-weight-light">{props.data.date}</Card.Subtitle>
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