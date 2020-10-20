import {followUser, getUsers, unfollowUser} from "../API/API";
import {Dispatch} from "redux";

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersType
}

export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetUsersTotalCountActionType = {
    type: 'SET-USERS-TOTAL-COUNT'
    totalUsersCounr: number
}

export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean

}
export type ToggleInFollowingProgressActionType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: number

}


export type PhotoType = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: null | string
    followed: boolean


}

export type UsersType = Array<UserType>


let initialeState = {
    items: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number []

}

export type ActionsType = FollowActionType | UnFollowActionType
    | SetUsersActionType | SetCurrentPageActionType | SetUsersTotalCountActionType | ToggleIsFetchingActionType |
    ToggleInFollowingProgressActionType


export type UsersStateType = typeof initialeState

export const usersReducer = (state: UsersStateType = initialeState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state, items: action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }

        }
        case 'SET-USERS-TOTAL-COUNT': {
            return {
                ...state, totalUsersCount: action.totalUsersCounr
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        case "TOGGLE-IS-FOLLOWING-PROGRESS": {

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress?.filter(id => id !== action.userId)
            }
        }


        default:
            return state
    }

}

export const followAC = (userId: number): FollowActionType => ({type: 'FOLLOW', userId: userId})

export const unFollowAC = (userId: number): UnFollowActionType => ({type: 'UNFOLLOW', userId: userId})

export const setUsersAC = (users: UsersType): SetUsersActionType => ({type: 'SET-USERS', users: users})

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
})

export const setUsersTotalCountAC = (totalUsersCounr: number): SetUsersTotalCountActionType => ({
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCounr
})

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
})

export const toggleFollowingProgressAC = (isFetching: boolean, userId: number): ToggleInFollowingProgressActionType => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching, userId
})

export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {

        dispatch(toggleIsFetchingAC(true))
        getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount))

        })
    }
}


export const followThunkCreater = (id: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgressAC(true, id))

        followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleFollowingProgressAC(false, id))
        })
    }
}

export const unfollowThunkCreater = (id: number) => {

    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgressAC(true, id))
        unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(toggleFollowingProgressAC(false, id))
        })
    }
}

