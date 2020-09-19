import React from "react";

import {ActionsType, DialogsPageType} from "../../redux/store";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogPage-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";


type PropsType = {

    store: StoreType

  /*  dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void*/


  /*  addMessage: () => void
    updateNewMessageText: (newMessage: string) => void*/
}


export const DialogsContainer = (props: PropsType) => {


    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onMessageChange = (newMessage: string) => {
        props.store.dispatch(onMessageChangeAC(newMessage))
    }


    return (
        <Dialogs
            updateNewMessageText={onMessageChange}
            addMessage={addMessage}
            dialogsPage={props.store.getState().dialogsPage}
        />
    );
}
