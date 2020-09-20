import {AddPostActionType, MessagesType, UpdateNewPostTextType} from "./store";

let initialeState = {

    dialogs: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine"},
        {id: "4", message: "I'm happy"},
        {id: "5", message: "Happy new year"}
    ],
    newMessageText: ''
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextType | AddMessageActionType | UpdateNewMessageTextType


export type DialogsStateType = typeof initialeState


export const dialogsPageReducer = (state: DialogsStateType = initialeState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage: MessagesType = {id: "6", message: state.newMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
            // return stateCopy

            // stateCopy.messages = [...stateCopy.messages]
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageText = '';
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return  {
                ...state,
                newMessageText: action.newMessage
            }
            // return stateCopy
            // stateCopy.newMessageText = action.newMessage

        }
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})

export const onMessageChangeAC = (newMessage: string): UpdateNewMessageTextType =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage})