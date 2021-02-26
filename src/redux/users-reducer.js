import { FollowAPI, UsersAPI } from "../api/api"

let initialstate = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
}

const usersReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default: return state;
    }
}

export const follow = (userID) => ({
    type: 'FOLLOW', userID
})

export const unfollow = (userID) => ({
    type: 'UNFOLLOW', userID
})

export const setUsers = (users) => ({
    type: 'SET-USERS', users
})

export const setCurrentPage = (currentPage) => ({
    type: 'SET-CURRENT-PAGE', currentPage
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: 'SET-TOTAL-USERS-COUNT', totalUsersCount
})

export const setisFetching = (isFetching) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
})

export const setisFollowing = (isFetching, userId) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId
})

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setisFetching(true));
        let data = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(setisFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const FolowUnfolowLogic = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(setisFollowing(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setisFollowing(false, userId));
}

export const getUnfollowingThunk = (userId) => {
    return async (dispatch) => {
        FolowUnfolowLogic(dispatch,userId,FollowAPI.getUnfollow.bind(FollowAPI),unfollow)
    }
}

export const getFollowingThunk = (userId) => {
    return async (dispatch) => {
        FolowUnfolowLogic(dispatch,userId,FollowAPI.getFollow.bind(FollowAPI),follow)
    }
}

export default usersReducer;