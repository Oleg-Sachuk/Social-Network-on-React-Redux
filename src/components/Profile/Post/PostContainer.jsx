// import React from 'react';
import Post from './Post';
import { AddPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            if (text) {
                dispatch(AddPostActionCreator(text));
            } else {
                alert('The field is empty')
            }
        }
    }
}


const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);

export default PostContainer;