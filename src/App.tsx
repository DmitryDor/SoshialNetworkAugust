import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {StoreType} from "./redux/redux-store";


export type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
    store: StoreType
    /*addPost: () => void
    updateNewPostText: (newPost: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void*/
}

const App = (props: PropsType) => {


    return (

        <div className="app-wrapper">
            <Header />
            <Navbar/>
            {/*<div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer dialogsPage={props.state.dialogsPage}
                                                              dispatch={props.dispatch}
                />}/>*/}
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}
                />}/>
               {/* <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
                />}/>*/}

                 <Route path="/profile" render={() => <Profile store={props.store}
                />}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
);
}

export default App;
