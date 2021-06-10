import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, resetSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form_container';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    navLink: (<Link to="/signup" onClick={(e) => { dispatch(resetSessionErrors()) }} className="link-text">Sign up for Fermentsite</Link>),
    resetSessionErrors: () => dispatch(resetSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);