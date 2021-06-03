import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    
    let preloadedState = undefined;

        if (window.currentUser) {
          preloadedState = {
            entities: {
              users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
          };
        } 
        let store = configureStore(preloadedState);

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})