import React from 'react';
import style from './ProfileInfo.module.css';
import { Card, Col, Row } from 'react-bootstrap';
import Textarea from '../../Common/Textarea';
import { Field, Form } from 'react-final-form';
import { maxLength } from '../../../utils/validators/validators';


const ProfileInfoEdit = (props) => {

    return (
        <Form
            initialValues={props.profile}
            onSubmit={values => {
                props.saveProfile(values,props.loggeduserid);
                props.goToDefaultMode();
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={style.about}>
                            <Card className={style.aboutCard} body>
                                <span>
                                    <Field className={style.input} type={'textarea'} name={'aboutMe'} style={{ width: '100%' }} placeholder="About Me"
                                        component={Textarea} validate={maxLength(500)}></Field >
                                </span>
                            </Card>
                        </div>
                        <hr className={style.separator} />
                        <div className={style.fullname}>
                            <p>Full name:</p>
                            <div>
                            <Field className={style.input} type={'input'} name={'fullName'} style={{ width: '40%' }} placeholder="Full name"
                                component={Textarea} validate={maxLength(500)}></Field >
                            </div>
                        </div>
                        <div>
                            <p className={style.contactstitle}>Contacts:</p>
                            <Row className={style.contactRow}>
                                <Col className={style.contactColOne}>
                                <div><span>Facebook: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.facebook'} style={{ height: '30px' }}
                                        placeholder="Facebook" component={Textarea}></Field >
                                </div>
                                <div><span>Website: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.website'} style={{ height: '30px' }}
                                        placeholder="Website" component={Textarea}></Field >
                                </div>
                                <div><span>Github: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.github'} style={{ height: '30px' }}
                                        placeholder="Github" component={Textarea}></Field >
                                </div>
                                <div><span>Instagram: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.instagram'} style={{ height: '30px' }}
                                        placeholder="Instagram" component={Textarea}></Field >
                                </div>
                                </Col>
                                <Col className={style.contactColTwo}>
                                <div><span>Main Link: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.mainLink'} style={{ height: '30px' }}
                                        placeholder="Main Link" component={Textarea}></Field >
                                </div>
                                <div><span>Twitter: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.twitter'} style={{ height: '30px' }}
                                        placeholder="Twitter" component={Textarea}></Field >
                                </div>
                                <div><span>Vk: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.vk'} style={{ height: '30px' }}
                                        placeholder="Vk" component={Textarea}></Field >
                                </div>
                                <div><span>Youtube: </span>
                                    <Field className={style.input} type={'url'} name={'contacts.youtube'} style={{ height: '30px' }}
                                        placeholder="Youtube" component={Textarea}></Field >
                                </div>
                                </Col>
                            </Row>
                        </div>
                           <div>
                           <Field type={'checkbox'} className={style.customCheckbox} id="lookingForAJob" name={'lookingForAJob'} component={'input'} />
                                <label htmlFor="lookingForAJob"> Looking for a Job</label>
                           </div>
                        <Card body><div className={style.jobdesc}>
                            <div className={style.skillSpan}>
                                <span>Describe your skills:</span>
                            </div>
                        <Field className={style.input} type={'textarea'} name={'lookingForAJobDescription'} style={{ width: '100%' }} placeholder="Describe your proffecional skills"
                                component={Textarea} validate={maxLength(500)}></Field >
                        </div></Card>
                        <hr className={style.bottomseparator} />
                        <div className={style.editdivs}>
                            <button className={style.subBtn} disabled={pristine || submitting}>Submit</button>
                            <button className={style.backBtn} onClick={props.goToDefaultMode}>Back</button>
                        </div>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default ProfileInfoEdit;