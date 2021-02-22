import React from 'react';
import style from './Post.module.css'
import { Col, Row } from "react-bootstrap";
import { Field, Form } from 'react-final-form';
import { maxLength } from '../../../utils/validators/validators';
import Textarea from '../../Common/Textarea';

const PostForm = props => {
    return (
        <div>
            <Form
                onSubmit={values => {
                    props.addPost(values.NewPost);
                }}
            >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={10} >
                            <Field className={style.input} type={'textarea'} name={'NewPost'} style={{ width: '100%' }} placeholder="New Post" 
                            component={Textarea} validate={maxLength(500)}></Field >
                        </Col>
                        <Col>
                            <button disabled={pristine || submitting} className={style.postbtn}>Post</button>
                        </Col>
                    </Row>
                </form>
            )}
            </Form>
        </div >
    )
}

export default PostForm;