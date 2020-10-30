import React from 'react';
import {ActionsType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/redux-store";




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

let mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePage
    }
}

 let mapDispatctToProps = (dispatch: (action: ActionsType) => void) => {
    return {

        addPost: (addNewPost: string) => {
            dispatch(addPostAC(addNewPost))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatctToProps)(MyPosts);

