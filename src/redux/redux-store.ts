import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogPage-reducer";
import {usersReducer} from "./usersPage-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";

export type RootState = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});



export let store = createStore(reducers, applyMiddleware(thunkMiddleware));







// @ts-ignore
window.store = store