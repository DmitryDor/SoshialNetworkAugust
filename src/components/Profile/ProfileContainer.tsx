import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, SetUserProfileAC} from "../../redux/profilePage-reducer";
import {Preloader} from "../Preloader/Preloader";
import {withRouter, RouteComponentProps} from 'react-router-dom';

type  OwnPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (
            <div>
                {this.props.profile
                    ? <Profile profile={this.props.profile}/>
                    : <Preloader/>}
            </div>
        );
    }
}

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile: SetUserProfileAC})(WithUrlDataContainerComponent);