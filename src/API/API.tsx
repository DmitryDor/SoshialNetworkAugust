import axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'b52a7818-cb8a-4a61-a979-6c348c28951e'
    }


})

export const getUsers = (currentPage: number, pageSize: number) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => response.data)
}

export const getMyData = () => {
    return instance.get(`auth/me`).then(response => response.data)
}

export const unfollowUser = (id: number) => {
    return instance.delete(`follow/${id}`).then(response => response.data)
}


export const followUser = (id: number) => {
    return instance.post(`follow/${id}`).then(response => response.data)
}

export const getProfile = (userID: string) => {
    return  instance.get(`profile/${userID}`)
}

