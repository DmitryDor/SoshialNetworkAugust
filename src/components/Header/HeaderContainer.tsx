import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";

import {setAothUserDataAC} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";


type  OwnPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: string | null) => void
}

type PropsType = MapStateToPropsType & MapDispatchPropsType & OwnPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {

                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: RootState) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}


export default connect(MapStateToProps, {
    setAuthUserData: setAothUserDataAC
})(HeaderContainer)
