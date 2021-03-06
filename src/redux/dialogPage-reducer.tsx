
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
    // newMessageText: ''
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}
/*export type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}*/

export  type MessagesType =  {
    id: string,
    message: string
}

export type ActionsType =  AddMessageActionType
    // | UpdateNewMessageTextType

export type DialogsType = {
    id: string,
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
    newMessageText: string
}

export type DialogsStateType = typeof initialeState


export const dialogsPageReducer = (state: DialogsStateType = initialeState, action: ActionsType): DialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage: MessagesType = {id: "6", message: action.newMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],

            }
            // return stateCopy

            // stateCopy.messages = [...stateCopy.messages]
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageText = '';
        }
      /*  case "UPDATE-NEW-MESSAGE-TEXT": {
            return  {
                ...state,
                newMessageText: action.newMessage
            }
            // return stateCopy
            // stateCopy.newMessageText = action.newMessage

        }*/
        default:
            return state
    }
}

export const addMessageAC = (newMessageText: string): AddMessageActionType => ({type: 'ADD-MESSAGE', newMessageText})

/*
export const onMessageChangeAC = (newMessage: string): UpdateNewMessageTextType =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage})*/
