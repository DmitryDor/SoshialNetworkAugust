import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogPage-reducer";
import {usersReducer} from "./usersPage-reducer";


export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);







// @ts-ignore
window.store = store