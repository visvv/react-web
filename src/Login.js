import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props)
    this.doLogin = this.doLogin.bind(this);
    this.renderLogin = this.rednderLogin.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.state = { isLoggedIn: false }
  }

  doLogin() {
    console.log("Doing login" + this.props.email);
    this.setState({ isLoggedIn: true})
  }

  rednderLogin() {
    return (
      <form className="Login">
        <input type="email" value={this.props.email} placeholder="sample@mail.com" />
        <input type="password" placeholder="xxxxx" />
        <input type="button" value="Login" onClick={this.doLogin} />
        <input type="button" value="Cancel" onClick={(e) => { console.log('Cancel') }} />
      </form>
    );
  }

  renderMessage() {
    return (<h2>User is already logged in.</h2>);
  }

  render() {
    if(this.state.isLoggedIn){
      return this.renderMessage();
    }
    return this.renderLogin();
  }
}

export default Login;
