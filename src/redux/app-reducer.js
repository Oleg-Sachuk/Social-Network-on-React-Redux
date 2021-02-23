import { getAuthThunk } from "./auth-reducer";

let initialstate = {
    initialized: false,
}

const appReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET-INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state;
    }
}

export const InitializeSuccess = () => ({
    type: 'GET-INITIALIZED'
})

export const InitializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthThunk());
        Promise.all([promise])
            .then(() => {
                dispatch(InitializeSuccess());
            })
    }

}

export default appReducer;