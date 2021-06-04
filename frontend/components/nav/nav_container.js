import { signup, login, logout } from '../../actions/session_actions'
import { connect } from 'react-redux'
import Nav from './navBar'

const mSTP = (state) => {
    return {
    currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    processLogout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Nav)