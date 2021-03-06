import {Dispatch} from "redux";
import {getMyData} from "../API/API";

export type DataType = {
    id: null | number
    email: null | string
    login: null | string

}

export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    data: DataType,

}

let initialeState = {
    data: {
        id: null,
        email: null,
        login: null,
    } as DataType,
    isAuth: false


}
export type ActionsType = SetUserDataActionType


export type AuthStateType = typeof initialeState


export const authReducer = (state: AuthStateType = initialeState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                data: action.data,
                isAuth: true

            }
        }


        default:
            return state
    }
}


export const setAothUserDataAC = (id: null | number, email: null | string, login: null | string): SetUserDataActionType => ({
    type: 'SET-USER-DATA',
    data: {id, email, login}
})

export const getAothUserThunkCreater = () => {
    return (dispatch: Dispatch) => {
        getMyData().then(data => {
            if (data.resultCode === 0) {

                let {id, email, login} = data.data
                dispatch(setAothUserDataAC(id, email, login))
            }
        })
    }
}