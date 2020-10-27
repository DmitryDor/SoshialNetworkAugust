import axios from "axios";


const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '85f5b2d8-12c7-48ad-9f88-79f9075e9df3'
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
    console.warn('Obsolete method. Please profileAPI object')
    return  profileAPI.getProfile(userID)
}

export const profileAPI = {
     getProfile  (userId: string)  {
        return  instance.get(`profile/${userId}`)
    },
    getStatus(userId: string){
        return  instance.get(`profile/status/${userId}`)
    },
    upDateStatus(status: string){
         return instance.put(`profile/status/`, {status: status})
    }
}
