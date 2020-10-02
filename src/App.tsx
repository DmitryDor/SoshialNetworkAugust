import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



export type PropsType = {
   /* state: StateType
    dispatch: (action: ActionsType) => void
    store: StoreType*/
    /*addPost: () => void
    updateNewPostText: (newPost: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void*/
}

const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>

                {/* <Route path="/profile" render={() => <Profile pr

                ofilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
                />}/>*/}


                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
);
}

export default App;
