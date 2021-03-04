import React from 'react';
import style from './ProfileInfo.module.css';
import ppic from '../../../assets/images/laptop-user.png'
import cover from '../../../assets/images/bg_cover.jpg';
import ProfileInfoEdit from './ProfileInfoEdit';
import ProfileInfoDefault from './ProfileInfoDefault';
import Loader from '../../../assets/GIFs/Loader';
import { useState } from 'react';
import { ProfilePicInput } from './ProfilePartials/ProfilePicInput';
import ProfileStatusWithHooks from './ProfilePartials/ProfileStatusHooks';

const ProfileInfo = (props) => {

    let [editMode,setEditMode] = useState(false);


    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className={style.mainContainer}>
            <div>
                <img className={style.cover} src={cover} alt="Profile Header" height={'200px'} width={'800px'}></img>
                <img className={style.ppic} src={props.profile.photos.large != null ? props.profile.photos.large : ppic} alt={ppic}></img>
                {props.profile.userId === props.loggeduserid && <ProfilePicInput {...props}/>}
            </div>
            <div className={style.name}>
                <p>{props.profile.fullName}</p>
            </div>
            <div className={style.status}>
                {props.profile.userId !== props.loggeduserid
                    ? <span>{props.status}</span>
                    : <ProfileStatusWithHooks status={props.status} updateUsersStatus={props.updateUsersStatus} />
                }
            </div>
            {editMode 
            ? <ProfileInfoEdit saveProfile={props.saveProfile} goToDefaultMode={ () => {setEditMode(false)}} {...props} /> 
            : <ProfileInfoDefault goToEditMode={ () => {setEditMode(true)}} {...props} />
            }
        </div>
    )
}

export default ProfileInfo;