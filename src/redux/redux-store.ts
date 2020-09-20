import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogPage-reducer";
import {ActionsType, StateType, SubscribeType} from "./store";


/*export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: SubscribeType
    dispatch: (action: ActionsType) => void
}*/

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
});

export let store = createStore(reducers);

// @ts-ignore
window.store = store