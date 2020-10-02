import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogPage-reducer";
import {usersReducer} from "./usersPage-reducer";
import {authReducer} from "./auth-reducer";


export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers);







// @ts-ignore
window.store = store