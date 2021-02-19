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
        default: return state;
    }
}

export const SetAuthUserData = (userId, email, login) => ({
    type: 'SET-USER-DATA', data: {userId, email, login}
})

export const VerifyAuthUserData = (userId) => ({
    type: 'LOGGED-USER-DATA', userId
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

export default authReducer;