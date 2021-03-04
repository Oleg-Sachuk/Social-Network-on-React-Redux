import { AuthAPI, SecurityAPI } from "../api/api";

let initialstate = {
    userId: null,
    loggedId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        }
        case 'LOGGED-USER-DATA': {
            return {
                ...state,
                loggedId: action.userId
            }
        }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'GET-CAPTCHA-URL':
            return {
                ...state,
                captchaUrl: action.url
            }
        default: return state;
    }
}

export const SetAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET-USER-DATA', data: { userId, email, login, isAuth }
})

export const VerifyAuthUserData = (userId) => ({
    type: 'LOGGED-USER-DATA', userId
})

export const setisFetching = (isFetching) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
})

export const getCaptchaUrlSuccess = (url) => ({
    type: 'GET-CAPTCHA-URL', url
})

export const getAuthThunk = () => async (dispatch) => {
    let data = await AuthAPI.getAuth()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(VerifyAuthUserData(id));
        dispatch(SetAuthUserData(id, email, login, true));
    }
}

export const getSignIn = (userinfo) => {
    return async (dispatch) => {
        dispatch(setisFetching(true));
        let data = await AuthAPI.AuthoriseUser(userinfo);
            if (data.resultCode === 0) {
                dispatch(getAuthThunk());
                dispatch(setisFetching(false));
            } else {
                if(data.resultCode === 10) {
                    dispatch(getCaptchaURL());
                }
            }
    }
}

export const getCaptchaURL = () => {
    return async (dispatch) => {
        const data = await SecurityAPI.getCaptcha();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}

export const getSignOut = () => {
    return async (dispatch) => {
        dispatch(setisFetching(true));
        let data = await AuthAPI.LogOutUser();
            if (data.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false));
                dispatch(setisFetching(false));
            }
    }
}

export default authReducer;