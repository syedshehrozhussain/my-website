import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../post/Post';

import * as postsIndex from '../../postsIndex.js'

function Body() {
    const numberOfPosts = Object.keys(postsIndex).length/3;
    const posts = [];

    for (let i = 0; i < numberOfPosts; i++) {
        let postObjectNumber = 'post_' + i;
        let postObject = {};
        postObject[postObjectNumber] = {};
        Object.keys(postsIndex).forEach((key, index) => {
            const postNumber = key.substring(key.indexOf('_') + 1);
            if (postNumber === i.toString()) {
                let tempKeyValuePair = {};
                tempKeyValuePair[key] = postsIndex[key];
                Object.assign(postObject[postObjectNumber], tempKeyValuePair);
            }
        });
        posts.push(postObject[postObjectNumber]);
    }

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
            {posts.map((post, index) => {
                    return <Post key={index} image={post['image_' + index]} data={post['data_' + index]} text={post['text_' + index]}></Post>
            })}
        </Container>
    );
}

export default Body;