import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

import {getAothUserThunkCreater, setAothUserDataAC} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";
import {getMyData} from "../../API/API";


type  OwnPropsType = {
    // setAuthUserData: (id: null | number, email: null | string, login: null | string) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    // setAuthUserData: (id: null | number, email: null | string, login: string | null) => void
    getAothUser: () => void
}

type PropsType = MapStateToPropsType & MapDispatchPropsType & OwnPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
       this.props.getAothUser()

        /*getMyData().then(data => {
            if (data.resultCode === 0) {

                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })*/
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
    // setAuthUserData: setAothUserDataAC,
    getAothUser: getAothUserThunkCreater
})(HeaderContainer)
