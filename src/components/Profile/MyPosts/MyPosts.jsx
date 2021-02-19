import React from 'react';
import style from './MyPosts.module.css'
import { Card } from 'react-bootstrap';

const MyPosts = (props) => {
    return (
        <div className={style.post}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>
                        <img src='https://thumbs.dreamstime.com/b/husky-dog-profile-portrait-28584751.jpg' alt='Avatar'></img>
                        {' Oleg Sachuk'}
                    </Card.Title>
                    <Card.Subtitle className="mb-1 text-muted">15.02.2021 11:52</Card.Subtitle>
                    <Card.Text>
                        {props.message}
                    </Card.Text>
                    <Card.Text>{`Likes: ${props.likes}`}</Card.Text>
                    <Card.Link href="#">Like</Card.Link>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default MyPosts;