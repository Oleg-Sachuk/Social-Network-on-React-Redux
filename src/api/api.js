import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b6103def-9794-4488-9d68-9eb99b73a861"
    }
})

export const UsersAPI = {
    getUsers (currentPage = 1 , pageSize = 5) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then (response => {
            return response.data;
        })
    }
}

export const FollowAPI = {
    getFollow (userId) {
        return instance.post(`follow/${userId}`,{})
        .then (response => {
            return response.data;
        })
    },
    getUnfollow (userId) {
        return instance.delete(`follow/${userId}`)
        .then (response => {
            return response.data;
        })
    }
}

export const AuthAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then (response => {
            return response.data;
        })
    },
    AuthoriseUser(userdata) {
        return instance.post(`/auth/login`,{email:userdata.email, password:userdata.password,
        rememberMe:userdata.rememberMe})
        .then (response => {
            return response.data;
        })
    },
    LogOutUser() {
        return instance.delete(`/auth/login`)
        .then (response => {
            return response.data;
        })
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId)
        .then (response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then (response => {
            return response;
        })
    },
    changeProfileStatus(newStatus) {
        return instance.put(`profile/status`,{ status: newStatus })
        .then (response => {
            return response.data;
        })
    },
    savePic(file) {
        const formData = new FormData();
        formData.append("image",file)
        return instance.put(`profile/photo`,formData,{
            headers:{
                "Content-Type": 'multipart/form-data'
            }
        })
        .then (response => {
            return response.data;
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
        .then (response => {
            return response.data;
        })
    }
}

export const SecurityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
        .then (response => {
            return response.data;
        })
    }
}