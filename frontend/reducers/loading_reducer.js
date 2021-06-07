import {
    RECEIVE_EVENT,
    RECEIVE_EVENTS,
    START_LOADING_EVENTS,
    START_LOADING_EVENT,
  } from '../actions/event_actions';
 
  const initialState = {
    indexLoading: false,
    detailLoading: false
  };
  
  const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_EVENTS:
        return Object.assign({}, state, { indexLoading: false });
      case RECEIVE_EVENT:
        return Object.assign({}, state, { detailLoading: false });
      case START_LOADING_EVENTS:
        return Object.assign({}, state, { indexLoading: true });
      case START_LOADING_EVENT:
        return Object.assign({}, state, { detailLoading: true });
      default:
        return state;
    }
  };
  
  export default loadingReducer;
  