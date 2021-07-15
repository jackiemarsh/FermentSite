import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.resetSessionErrors()
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  renderErrors() {
    if (this.props.errors.length >= 1) {
        return(
        <ul className="error-box">
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="errors">
                {error}
            </li>
            ))}
        </ul>
        );
    } else {
        return null
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleLogin} className="login-form">

          <div className="form-intro">
            <h1>Log in</h1>
            {this.renderErrors()}
          </div>

          <div className="login-fields">
            <div className="login-container">
              <label>Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input" required
                />
              </label>
            </div>
            <div className="login-container">
              <label>Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" required
                />
              </label>
            </div>
            <input className="button-submit" type="submit" value="Log in" />
          </div>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default LoginForm;
