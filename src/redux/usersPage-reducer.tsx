export type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersType
}

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photoURL: any
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersType = Array<UserType>
type InitialeStateType = {
    [key: string]: UsersType
}


let initialeState = {
    users: [
        {
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
        }
    ] as Array<UserType>

}

export type ActionsType = FollowActionType | UnFollowActionType | SetUsersActionType


// export type UsersStateType<UsersType> = typeof initialeState
export type UsersStateType = typeof initialeState

export const usersReducer = (state: UsersStateType = initialeState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state, users: [...state.users,  ...action.users]
            }
        }

        default:
            return state
    }

}

export const followAC = (userId: string): FollowActionType => ({type: 'FOLLOW', userId: userId})

export const unFollowAC = (userId: string): UnFollowActionType =>     ({type: 'UNFOLLOW', userId: userId})

export const setUsersAC = (users: UsersType) => ({type: 'SET-USERS', users: users })