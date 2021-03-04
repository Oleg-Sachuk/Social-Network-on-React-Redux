import React from 'react';
import style from './ProfileInfo.module.css';
import ContactTable from './ProfilePartials/ContactTable';
import { Card, Col, Row } from 'react-bootstrap';

const ProfileInfoDefault = (props) => {

    let contacts = { ...props.profile.contacts };

    return (
        <div>
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
            <hr className={style.bottomseparator} />
            {props.profile.userId === props.loggeduserid 
            && <div className={style.editdiv}><button className={style.editbtn} onClick={props.goToEditMode}>edit</button></div> }
        </div>
    )
}

export default ProfileInfoDefault;