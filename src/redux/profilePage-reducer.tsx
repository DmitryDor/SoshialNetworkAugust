import {PhotoType} from "./usersPage-reducer";


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPost: string
}

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
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
    newPostText: '',
    profile:  null as null | ProfileType


}
export type ActionsType = AddPostActionType  | SetUserProfileActionType | UpdateNewPostTextType


export type ProfileStateType = typeof initialeState


export const profilePageReducer = (state: ProfileStateType = initialeState, action: ActionsType): ProfileStateType => {
    switch (action.type){
        case "ADD-POST": {
            let newPost: PostType = {id: '5', message: state.newPostText, likesCount: 0};
            return  {
                ...state,
                newPostText: '',
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
        case "UPDATE-NEW-POST-TEXT": {
            if (action.newPost) {
                return  {
                    ...state,
                    newPostText: action.newPost
                }
            }
        }

        default:
            return state
    }

}

export const addPostAC = (): AddPostActionType => ({type: 'ADD-POST'})

export const onPostChangeAC = (newText: string): UpdateNewPostTextType =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newPost: newText })

export const SetUserProfileAC = (profile: ProfileType): SetUserProfileActionType =>
    ({type:"SET-USER-PROFILE", profile})