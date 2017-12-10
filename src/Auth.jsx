import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';
import { Link } from 'react-router-dom';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentToRender: "signup"
    }
  }

  selectSignup = () => {
    this.setState({componentToRender: "signup"});
    document.getElementById("signup").classList.add('selected');
    document.getElementById("login").classList.remove('selected');
  };

  selectlogin = () => {
    this.setState({componentToRender: "login"});
    document.getElementById("login").classList.add('selected');
    document.getElementById("signup").classList.remove('selected');
  };

  render() {
    return (
      <div className="auth-container" >
        <img src="img/onboarding-bg.png"  alt="auth background" />
        <div className="nav">
          <Link to="/home"><span className="logo">Reacor</span></Link>
        </div>
        <div className="auth-form">
          <div>
            <span className="auth-menu selected" id="signup" onClick={this.selectSignup}>SIGN UP</span>
            <span className="auth-menu" id="login" onClick={this.selectlogin}>LOG IN</span>
          </div>
          {
            this.state.componentToRender === "signup" ? <Signup/> : <Login/>
          }
        </div>
      </div>
    )
  }
}
