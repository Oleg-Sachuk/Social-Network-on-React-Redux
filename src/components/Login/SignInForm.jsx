import React from 'react';
import { Field, Form } from 'react-final-form';
// import style from './Login.module.css';


const SignInForm = (props) => {
    return (
        <Form
        onSubmit = {formData => {
            debugger;
            props.getSignIn(formData);
            console.log(formData);
        }}
        >
        {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
        )}
        </Form>
    )
}

export default SignInForm;
