import React from 'react';
// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreater, ProfileType, SetUserProfileAC} from "../../redux/profilePage-reducer";
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
    // isAuth: boolean
}

type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: any) => void
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
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)*/

        /*getProfile(userId) .then(response => {

             this.props.setUserProfile(response.data)
         })*/
    }

    render() {



        return (
            <div>
                {this.props.profile
                    ? <Profile profile={this.props.profile} />
                    : <Preloader/>}
            </div>
        );
    }
}


let mapStateToProps = (state: RootState) => ({

        profile: state.profilePage.profile
        // isAuth: state.auth.isAuth

})

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)*/

export default compose<React.ComponentClass>(
    connect(mapStateToProps, {
        // setUserProfile: SetUserProfileAC,
        getUserProfile: getUserProfileThunkCreater
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

