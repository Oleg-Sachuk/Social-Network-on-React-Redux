import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import style from './Login.module.css';
import { getSignIn } from "../../redux/auth-reducer";
import SignInForm from './SignInForm';
import Loader from '../../assets/GIFs/Loader';

const Login = (props) => {
    if (props.isFetching) {
        return <Loader />
    }
    else {
        return (
            <div>
                <Container className={style.mainContainer}>
                    <div className={style.headContainer}>
                        <div>
                            <h3>LOGIN</h3>
                        </div>
                    </div>
                    <SignInForm {...props} />
                    <div className={style.footContainer}>
                        <div>
                            <h5>Fill this form to go on</h5>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching
    }
}

export default compose(connect(mapStateToProps, { getSignIn }))(Login);