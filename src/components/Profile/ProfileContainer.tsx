import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {RootState} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, SetUserProfileAC} from "../../redux/profilePage-reducer";
import {Preloader} from "../Preloader/Preloader";

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

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile: SetUserProfileAC})(ProfileContainer);