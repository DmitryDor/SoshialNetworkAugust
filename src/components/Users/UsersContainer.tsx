import React from 'react'
import {Users} from './Users'
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersPage-reducer";
import {RootState} from "../../redux/redux-store";


let MapStateToProps = (state: RootState) => {

    return {
        users: state.usersPage.users
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)


