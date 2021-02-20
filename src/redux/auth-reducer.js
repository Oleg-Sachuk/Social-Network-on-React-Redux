import { AuthAPI } from "../api/api";

let initialstate = {
    userId: null,
    loggedId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialstate ,action) => {
    switch (action.type) {
        case 'SET-USER-DATA': {            
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case 'LOGGED-USER-DATA': {            
            return {
                ...state,
                loggedId: action.userId
            }
        }
        case 'CONFIRM-AUTH': {            
            return {
                ...state,
                isFetching: true
            }
        }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: return state;
    }
}

export const SetAuthUserData = (userId, email, login) => ({
    type: 'SET-USER-DATA', data: {userId, email, login}
})

export const VerifyAuthUserData = (userId) => ({
    type: 'LOGGED-USER-DATA', userId
})

export const ConfirmAuth = () => ({
    type: 'CONFIRM-AUTH'
})

export const setisFetching = (isFetching) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
})

export const getAuthThunk = () => {
    return (dispatch) => {
        AuthAPI.getAuth().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(VerifyAuthUserData(id));
                dispatch(SetAuthUserData(id, email, login));
            }
        })
    }

}
export const getSignIn = (userinfo) => {
    return (dispatch) => {
        dispatch(setisFetching(true));
        AuthAPI.AuthoriseUser(userinfo).then(data => {
            if(data.resultCode === 0){
                dispatch(ConfirmAuth);
                dispatch(setisFetching(false));
            }
        })
    }
}

export default authReducer;