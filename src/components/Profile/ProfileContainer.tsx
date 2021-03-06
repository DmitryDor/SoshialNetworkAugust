import React from 'react';
// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreater,
    getUserProfileThunkCreater,
    ProfileType,
    SetUserProfileAC, updateStatusThunkCreater
} from "../../redux/profilePage-reducer";
import {Preloader} from "../Preloader/Preloader";
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../../hok/WihtAuthRedirect";
import {compose} from "redux";
// import {getProfile} from "../../API/API";

type  OwnPropsType = {
    // userId: any
    // setUserProfile: (profile: ProfileType) => void
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    // isAuth: boolean
}

type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (status: string) => void
    status: string

}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        /* let a = this.props
         let b = this.state*/

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')


        return (
            <div>
                {this.props.profile
                    ? <Profile profile={this.props.profile} status={this.props.status}
                               updateStatus={this.props.updateStatus}/>
                    : <Preloader/>}
            </div>
        );
    }
}


let mapStateToProps = (state: RootState) => ({

    profile: state.profilePage.profile,
    status: state.profilePage.status
    // isAuth: state.auth.isAuth

})

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)*/

export default compose<React.ComponentClass>(
    connect(mapStateToProps, {
        // setUserProfile: SetUserProfileAC,
        getUserProfile: getUserProfileThunkCreater,
        getStatus: getStatusThunkCreater,
        updateStatus: updateStatusThunkCreater,
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

/*
export default connect(mapStateToProps, {
    // setUserProfile: SetUserProfileAC,
    getUserProfile: getUserProfileThunkCreater
})(WithUrlDataContainerComponent);
*/

