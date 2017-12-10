import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  onUsernameChange = (e) => {
    this.setState({email: e.target.value});
  };

  onUsernameEnter = (e) => {
    let div = document.getElementById("signup-email-input");
    if (e.key === 'Enter') {
      div.focus();
    }
  };

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  onEmailEnter = (e) => {
    if (e.key === 'Enter') {
      let email = this.state.email.trim();
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(email)) {
        alert("Invalid Email")
      } else {
        let div = document.getElementById("signup-password-input");
        div.focus();
      }
    }
  };

  onPswdChange = (e) => {
    this.setState({email: e.target.value});
  };

  onPswdEnter = (e) => {
    if (e.key === 'Enter') {
      this.signup();
    }
  };

  signup = () => {
    let form = new FormData();
    form.append("username", this.state.username);
    form.append("email", this.state.email);
    form.append("password", this.state.password);

    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', form)
      .then(res => {
        alert("Sign up success!")
      })
      .catch(() => alert("Sign up failed, please try again"));
  };

  render() {

    const usernameIcon = {
      backgroundImage: 'url("img/ic-username.png")',
      backgroundRepeat: "no-repeat",
      textIndent: "60px",
      backgroundPosition: "15px 15px",
      backgroundSize: "30px"
    };

    const emailIcon = {
      backgroundImage: 'url("img/ic-email.png")',
      backgroundRepeat: "no-repeat",
      textIndent: "60px",
      backgroundPosition: "15px 15px",
      backgroundSize: "30px"
    };

    const passwordIcon = {
      backgroundImage: 'url("img/ic-password.png")',
      backgroundRepeat: "no-repeat",
      textIndent: "60px",
      backgroundPosition: "15px 15px",
      backgroundSize: "30px"
    };

    return (
      <div className="signup-container">
        <input
          id="signup-username-input"
          type="text"
          placeholder="Usermane"
          onChange={this.onUsernameChange}
          onKeyPress={this.onUsernameEnter}
          style={usernameIcon}
        />
        <input
          id="signup-email-input"
          type="text"
          placeholder="Email"
          onChange={this.onEmailChange}
          onKeyPress={this.onEmailEnter}
          style={emailIcon}
        />
        <input
          id="signup-password-input"
          type="text"
          placeholder="Password"
          onChange={this.onPswdChange}
          onKeyPress={this.onPswdEnter}
          style={passwordIcon}
        />
        <div className="auth-btn" onClick={this.signup}>SIGN UP</div>
      </div>
    )
  }
}