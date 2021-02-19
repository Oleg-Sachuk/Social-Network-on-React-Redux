import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import style from './Login.module.css';

const Login = () => {
    return (
        <div>
            <Container className={style.mainContainer}>
                <div className={style.headContainer}>
                    <div>
                        <h3>LOGIN</h3>
                    </div>
                </div>
                <Form className={style.mainForm}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <input type="checkbox" className={style.customCheckbox} id="happy" name="happy" value="yes" />
                                <label for="happy">Remember me</label>
                        </Col>
                    </Form.Group>

                        <Form.Group className={style.lastRow} as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                </Form>
                    <div className={style.footContainer}>
                        <div>
                            <h5>Fill this form to go on</h5>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Login;