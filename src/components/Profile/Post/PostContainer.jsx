// import React from 'react';
import Post from './Post';
import { AddPostActionCreator, UpdatePostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        UpdatePostText: (text) => {
            let action = UpdatePostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (text) => {
            if (text) {
                dispatch(AddPostActionCreator());
            } else {
                alert('The field is empty')
            }
        }
    }
}


const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);

export default PostContainer;