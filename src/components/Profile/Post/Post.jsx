import React from 'react';
import style from './Post.module.css'
import MyPosts from '../MyPosts/MyPosts'
import { Card } from 'react-bootstrap';
import PostForm from './PostForm';

const Post = (props) => {

    let AllPosts = props.posts.map(post => <MyPosts message={post.message} likes={post.likes} key={post.id}></MyPosts>);

    return (
        <div>
            <div className={style.posts}>
                {AllPosts}
            </div>
            <br/>
            <Card style={{paddingTop: '10px', marginBottom: '20px'}}>
                <Card.Body>
                    <PostForm {...props} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post;