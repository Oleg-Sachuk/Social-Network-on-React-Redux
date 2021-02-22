import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getSignIn, getSignOut } from "../../redux/auth-reducer";
import SignInForm from './SignInForm';
import Loader from '../../assets/GIFs/Loader';
import SignOutForm from './SignOutForm';

const Login = (props) => {
    if (props.isFetching) {
        return <Loader />
    }
    else {
        return (
            <div>
                { !props.isAuth ? <SignInForm {...props} /> : <SignOutForm {...props} />}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, { getSignIn, getSignOut }))(Login);