import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  heading() {
    if (this.props.formType === 'login') {
      return (<h1>Log in</h1>)
    } else {
      return (<h1>Create an account</h1>)
    }
  }

  conditional() {
    if (this.props.formType === 'login') {
      return null
    } else {
      return (<div>
        <label>Email
      <input type="text"
        value={this.state.email}
        onChange={this.update('email')}
        className="login-input"
      />
    </label>
      </div>) 
    }
  }

  render() {
    //   const emailField = this.props.formType === 'signup' ?  <label>Email:
    //   <input type="text"
    //     value={this.state.email}
    //     onChange={this.update('email')}
    //     className="login-input"
    //   />
    // </label> : null

    const submitText = this.props.formType === 'signup' ? "Create account" :
    "Log in"
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">

          <div className="form-intro">
            {this.heading()}
            {this.renderErrors()}
          </div>

          <div className="login-fields">
            <div className="login-container">
              <label>Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
            </div>
            <div className="login-container">
              <div>
                {this.conditional()}
              </div> 
            </div>
            <div className="login-container">
              <label>Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
            </div>

            <input className="session-submit" type="submit" value={submitText} />
          </div>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;
