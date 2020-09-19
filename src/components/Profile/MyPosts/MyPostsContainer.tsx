import React from 'react';


// import MyPosts from "./MyPosts";
import {ActionsType, ProfilePageType, StateType} from "../../../redux/store";
import {addPostAC, onPostChangeAC} from "../../../redux/profilePage-reducer";

import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import MyPosts from "./MyPosts";
// import {StoreType} from "../../../redux/redux-store";




// /*export const MyPostsContainer = (props: PropsType) => {
//
//
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//
//     const onPostChange = (newText: string) => {
//         props.store.dispatch(onPostChangeAC(newText))
//     }
//
//     /!* const onKeyPressHandler = (value: KeyboardEvent<HTMLTextAreaElement>) => {
//          if(value.charCode === 13){
//              addPost()
//          }
//      }*!/
//
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  profilePage={props.store.getState().profilePage}
//         />
//     );
// }
//
// */

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage

    }
}

 let mapDispatctToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(onPostChangeAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatctToProps)(MyPosts);

