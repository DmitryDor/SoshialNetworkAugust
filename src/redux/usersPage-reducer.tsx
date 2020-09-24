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

export type SetUsersTotalCountType = {
    type: 'SET-USERS-TOTAL-COUNT'
    totalUsersCounr: number
}

/*type LocationType = {
    city: string
    country: string
}*/
export type PhotoType = {
    "small": null | string
    "large": null | string
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
    items: [


     /*   {
            "name": "Djoker",
            "id": 11611,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }*/
        /*{
            id: "1",
            photoURL: 'https://avatarko.ru/img/kartinka/5/devushka_4426.jpg',
            followed: false,
            fullName: "Juliya",
            status: 'I am a hungre',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: "2",
            photoURL: 'https://avatarko.ru/img/kartinka/5/devushka_4426.jpg',
            followed: true,
            fullName: "Dimon",
            status: 'I am a good man',
            location: {city: 'Gomel', country: 'Belarus'}
        },
        {
            id: "3",
            photoURL: 'https://avatarko.ru/img/kartinka/5/devushka_4426.jpg',
            followed: false,
            fullName: "Kolya",
            status: 'I am a happy',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: "4",
            photoURL: 'https://avatarko.ru/img/kartinka/5/devushka_4426.jpg',
            followed: false,
            fullName: "Andrey",
            status: 'I am a student',
            location: {city: 'Kiev', country: 'Ukraine'}
        }*/
    ] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1

}

export type ActionsType = FollowActionType | UnFollowActionType
    | SetUsersActionType | SetCurrentPageActionType | SetUsersTotalCountType


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

        default:
            return state
    }

}

export const followAC = (userId: number): FollowActionType => ({type: 'FOLLOW', userId: userId})

export const unFollowAC = (userId: number): UnFollowActionType => ({type: 'UNFOLLOW', userId: userId})

export const setUsersAC = (users: UsersType): SetUsersActionType => ({type: 'SET-USERS', users: users})

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: 'SET-CURRENT-PAGE', currentPage })

export const setUsersTotalCountAC = (totalUsersCounr: number): SetUsersTotalCountType => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCounr })