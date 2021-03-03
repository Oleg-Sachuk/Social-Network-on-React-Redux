import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './Post/PostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} savePic={props.savePic} loggeduserid={props.loggeduserid}
            status={props.status} updateUsersStatus={props.updateUsersStatus}/>
            <div className={style.profileBlock}>My posts:</div>
            <PostContainer />
        </div>
    )
}

export default Profile;