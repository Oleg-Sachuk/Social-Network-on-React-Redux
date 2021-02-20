import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import style from './Login.module.css';


const SignInForm = (props) => {
    return (
        <div className={style.mainForm}>
            <Form
                onSubmit={formData => {
                    props.getSignIn(formData);
                    console.log(formData);
                }}
            >
                {({ handleSubmit, pristine, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={2}>
                                <label>E-mail</label>
                            </Col>
                            <Col sm={10}>
                                <div>
                                    <Field type={'email'} placeholder={'email'} name={'email'} component={'input'} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label>Password</label>
                            </Col>
                            <Col sm={10}>
                                <div>
                                    <Field type={'password'} placeholder={'password'} name={'password'} component={'input'} />
                                </div>
                            </Col>
                        </Row>
                        <Row className={style.lastRow}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <div>
                                    <Field type={'checkbox'} className={style.customCheckbox} id="rememberMe" name={'rememberMe'} component={'input'} />
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <div>
                                    <button disabled={pristine || submitting}>Sign In</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                )}
            </Form>
        </div>
    )
}

export default SignInForm;
