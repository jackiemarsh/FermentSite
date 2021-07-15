import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.renderHandleFile = this.renderHandleFile.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
    
    this.demoUser = {
      username: "demo_drinker123",
      password: 12345678,
      email: "demo@fermentsite.com"
    }
  }

  demoSubmit(e) {
    this.props.login({
      username: "demo_drinker123",
      password: 12345678,
      email: "demo@fermentsite.com"
    })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.resetSessionErrors()
  }

  handleSignUp(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append("user[username]", this.state.username)
    formData.append("user[password]", this.state.password)
    formData.append("user[email]", this.state.email)
    if (this.state.image && this.formType === 'signup') {
      formData.append("user[image]", this.state.image);
  }
    this.props.signup(formData);
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const filereader = new FileReader();
    filereader.onloadend = () => {
        this.setState({image: file, imageUrl: filereader.result});
    };
    if (file){
        filereader.readAsDataURL(file);
    }
  }

  renderHandleFile() {
    if (this.props.formType === 'signup') {
      return (
      <div className="login-pic">
          <label className="event-image">Upload an image
              <input type="file"
              onChange={this.handleFile.bind(this)}/>
          </label>
      </div>
      );
    } else {
      return null
    }
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
      return (
      <div className="login-container">
        <label>Email
          <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input" required/>
          </label>
      </div> ) 
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

    const demoButton = this.props.formType === 'signup' ? <div>Don't want to sign up?
      <button onClick={this.demoSubmit} className="demo-submit">Demo Login</button>
    </div>
   : null

    const submitText = this.props.formType === 'signup' ? "Create account" :
    "Log in"
    const handleForm = this.props.formType === 'signup' ? this.handleSignUp : this.handleLogin
    
    return (
      <div className="login-form-container">
        <form onSubmit={handleForm} className="login-form">

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
                  className="login-input" required
                />
              </label>
            </div>
                {this.conditional()}
            <div className="login-container">
              <label>Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input" required
                />
              </label>
            </div>
            <div>{this.renderHandleFile()}</div> 
              
            {/* <div className="login-pic">
              <label className="event-image">Upload an image
                  <input type="file"
                  onChange={this.handleFile.bind(this)}/>
                </label>
            </div> */}
            <input className="button-submit" type="submit" value={submitText} />
            <div>{demoButton}</div> 
          </div>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default LoginForm;
