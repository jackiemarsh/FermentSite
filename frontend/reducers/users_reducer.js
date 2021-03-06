import {RECEIVE_CURRENT_USER} from '.././actions/session_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newUser = {[action.currentUser.id]: action.currentUser}
            return Object.assign({}, state, newUser)
        default:
            return state;
    }
}
export default usersReducer