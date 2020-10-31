import {PhotoType} from "./usersPage-reducer";
import {Dispatch} from "redux";
import {getProfile, profileAPI} from "../API/API";


export type AddPostActionType = {
    type: 'ADD-POST'
    addNewPost: string
}



export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type SetStatusActionType = {
    type: "SET-STATUS"
    status: string
}


export type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}


export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

let initialeState = {

    posts: [
        {id: "1", message: "Hellooo", likesCount: 10},
        {id: "2", message: "Hi", likesCount: 5},
        {id: "3", message: "Fine", likesCount: 7},
        {id: "4", message: "World", likesCount: 8},
        {id: "5", message: "New year", likesCount: 5},
        {id: "6", message: "Bah", likesCount: 18}
    ],
    profile: null as null | ProfileType,
    newPostText: '',
    status: ''
}

export type ActionsType = SetStatusActionType
    | AddPostActionType
    | SetUserProfileActionType



export type ProfileStateType = typeof initialeState


export const profilePageReducer = (state: ProfileStateType = initialeState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: '5', message: action.addNewPost, likesCount: 0};
            return {
                ...state,

                posts: [...state.posts, newPost]
            }
            // return stateCopy
            // stateCopy.posts = [...state.posts, newPost];
            // stateCopy.posts.push(newPost)
            // stateCopy.newPostText = '';

        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case "SET-STATUS" : {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }

}

export const addPostAC = (addNewPost: string): AddPostActionType => ({type: 'ADD-POST', addNewPost})



export const SetUserProfileAC = (profile: ProfileType): SetUserProfileActionType =>
    ({type: "SET-USER-PROFILE", profile})

export const SetStatusAC = (status: string): SetStatusActionType =>
    ({type: "SET-STATUS", status})


export const getUserProfileThunkCreater = (userId: string) => {
    return (dispatch: Dispatch) => {
        getProfile(userId).then(response => {
            dispatch(SetUserProfileAC(response.data))
        })
    }
}

export const getStatusThunkCreater = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(SetStatusAC(response.data))
        })
    }
}

export const updateStatusThunkCreater = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.upDateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetStatusAC(status))
            }
        })
    }
}


















