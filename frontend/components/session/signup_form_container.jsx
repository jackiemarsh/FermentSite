import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, resetSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    // navLink: <Link to="/login" className="link-text">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    navLink: (<Link to="/login" onClick={(e) => { dispatch(resetSessionErrors()) }} className="link-text">Log In</Link>),
    resetSessionErrors: () => dispatch(resetSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);