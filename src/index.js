import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from "./store/redux-store";

let rerenderEntireTree = (state) => {

    ReactDOM.render(<App store={store} state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
