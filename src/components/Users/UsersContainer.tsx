import React from 'react'
import {Users} from './Users'
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC,  UserType} from "../../redux/usersPage-reducer";
import {RootState} from "../../redux/redux-store";


let MapStateToProps = (state: RootState) => {

    return {
        users: state.usersPage.items
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)


