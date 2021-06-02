import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
// import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('root'))
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})