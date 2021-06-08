import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form_container';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    navLink: (<Link to="/signup" onClick={(e) => { dispatch(resetSessionErrors()) }} className="link-text">Sign up for Fermentsite</Link>),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);