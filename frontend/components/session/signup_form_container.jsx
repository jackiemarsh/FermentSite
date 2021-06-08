import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form_container';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    // navLink: <Link to="/login" className="link-text">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    navLink: (<Link to="/login" onClick={(e) => { dispatch(resetSessionErrors()) }} className="link-text">Log In</Link>),
 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);