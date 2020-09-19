import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

  rerenderEntireTree();


store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
