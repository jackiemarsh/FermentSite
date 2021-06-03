import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
  conditional() {
    if (this.props.formType === 'login') {
      return null
    } else {
      return (<div>
        <label>Email:
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

    const submitText = this.props.formType === 'signup' ? "Create a New Account" :
    "Login"
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <br />
          <div className="form-intro">
            {this.props.formType}
            {this.renderErrors()}
          </div>

          <div className="login-fields">
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <div>
              {this.conditional()}
            </div> 
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>

            <input className="session-submit" type="submit" value={submitText} />
          </div>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;
