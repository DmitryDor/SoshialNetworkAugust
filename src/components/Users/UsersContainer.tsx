import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, toggleIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UserType, toggleFollowingProgressAC
} from "../../redux/usersPage-reducer";
import {RootState} from "../../redux/redux-store";
import {Users} from "./Users";
import {getUsers} from "../../API/API";
import {Preloader} from "../Preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    followingInProgress: boolean

}




export class UsersContainerClass extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   pageSize={this.props.pageSize}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}


            />
        </>

    }
}


let MapStateToProps = (state: RootState) => {

    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

/*
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/


export const UsersContainer = connect(MapStateToProps,{
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingProgress: toggleFollowingProgressAC
})(UsersContainerClass)


