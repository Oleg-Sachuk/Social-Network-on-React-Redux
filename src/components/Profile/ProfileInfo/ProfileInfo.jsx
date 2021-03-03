import React from 'react';
import style from './ProfileInfo.module.css';
import ppic from '../../../assets/images/laptop-user.png'
import Loader from '../../../assets/GIFs/Loader';
import cover from '../../../assets/images/bg_cover.jpg';
import ContactTable from './ProfilePartials/ContactTable';
import { Card, Col, Row } from 'react-bootstrap';
// import { ProfileStatus } from './ProfilePartials/ProfileStatus';
import ProfileStatusWithHooks from './ProfilePartials/ProfileStatusHooks';
import { ProfilePicInput } from './ProfilePartials/ProfilePicInput';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    let contacts = { ...props.profile.contacts };

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
                    : <ProfileStatusWithHooks status={props.status} updateUsersStatus={props.updateUsersStatus} />}
            </div>
            <div className={style.about}>
                <Card className={style.aboutCard} body>
                    <p>About Me:</p>
                    <span>{props.profile.aboutMe}</span>
                </Card>
            </div>
            <hr className={style.separator} />
            <ContactTable contacts={contacts} />
            <Card className={style.employment}>
                <Row className={style.empRow}>
                    <Col><div className={style.leftpart}>Looking for a Job:</div></Col>
                    {props.profile.lookingForAJob
                        ? <Col className={style.cont} style={{ textAlign: 'bottom' }} ><div className={style.yesCircle}></div></Col>
                        : <Col className={style.cont} style={{ textAlign: 'bottom' }} ><div className={style.noCircle}></div></Col>}
                </Row>
            </Card>
            <Card body><div className={style.jobdesc}>{props.profile.lookingForAJobDescription}</div></Card>
            <hr className={style.separator} />
        </div>
    )
}

export default ProfileInfo;