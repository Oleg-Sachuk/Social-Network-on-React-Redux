import { ProfileAPI } from "../api/api";

let initialstate = {
    postData: [
        { id: 0, message: "Hi how are you?", likes: 15 },
        { id: 1, message: "It's my first post!", likes: 20 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: state.postData.length,
                message: action.NewPost,
                likes: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-USER-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
}

export const AddPostActionCreator = (NewPost) => ({
    type: 'ADD-POST', NewPost
})

export const setUserProfile = (profile) => ({
    type: 'SET-USER-PROFILE', profile
})

export const setUsersStatus = (status) => ({
    type: 'SET-USER-STATUS', status
})

export const getProfileThunk = (id, loggeduserid) => {
    return async (dispatch) => {
        let userId = id;
        if (!userId) {
            userId = loggeduserid;
        }
        let data = await ProfileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUsersStatus = (userId) => {
    return async (dispatch) => {
        let res = await ProfileAPI.getStatus(userId);
        console.log(res);
        dispatch(setUsersStatus(res.data))
    }
}

export const updateUsersStatus = (newStatus) => {
    return async (dispatch) => {
        let data = await ProfileAPI.changeProfileStatus(newStatus);
        if (data.resultCode === 0) {
            dispatch(setUsersStatus(newStatus));
        }
    }
}

export default profileReducer;