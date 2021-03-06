import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
//     case 'login':
//       component = <LoginFormContainer />;
//       break;
//     case 'signup':
//       component = <SignupFormContainer />;
//       break;
    case 'success':
      component = <div className="login-container">Success!</div>;
      break;
    case 'signin':
      component = <div className="login-container">You need to log in</div>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
