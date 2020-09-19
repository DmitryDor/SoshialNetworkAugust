import React from 'react';


import MyPosts from "./MyPosts";
import {ActionsType, ProfilePageType} from "../../../redux/store";
import {addPostAC, onPostChangeAC} from "../../../redux/profilePage-reducer";
import {StoreType} from "../../../redux/redux-store";

type PropsType = {

    store: StoreType
    /* profilePage: ProfilePageType
     dispatch: (action: ActionsType) => void*/
}


export const MyPostsContainer = (props: PropsType) => {


    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (newText: string) => {
        props.store.dispatch(onPostChangeAC(newText))
    }

    /* const onKeyPressHandler = (value: KeyboardEvent<HTMLTextAreaElement>) => {
         if(value.charCode === 13){
             addPost()
         }
     }*/

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 profilePage={props.store.getState().profilePage}
        />
    );
}

