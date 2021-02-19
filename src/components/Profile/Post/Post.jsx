import React from 'react';
import style from './Post.module.css'
import MyPosts from '../MyPosts/MyPosts'
import { Card, Col, Row } from 'react-bootstrap';

const Post = (props) => {

    let AllPosts = props.posts.map(post => <MyPosts message={post.message} likes={post.likes} key={post.id}></MyPosts>);
    let NewPostElement = React.createRef();

    let OnAddPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text);
    }

    let OnPostChange = () => {
        let text = NewPostElement.current.value;
        props.UpdatePostText(text);
    }

    return (
        <div>
            <div className={style.posts}>
                {AllPosts}
            </div>
            <br/>
            <Card style={{paddingTop: '10px', marginBottom: '20px'}}>
                <Card.Body>
                    <div>
                        <Row>
                            <Col xs={10} >
                                <textarea style={{width: '100%'}} onChange={OnPostChange} ref={NewPostElement} value={props.newPostText}></textarea>
                            </Col>
                            <Col>
                                <button className={style.postbtn} onClick={OnAddPost}>Post</button>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post;