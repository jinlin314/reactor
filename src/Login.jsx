import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

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
        let div = document.getElementById("login-password-input");
        div.focus();
      }
    }
  };

  onPswdChange = (e) => {
    this.setState({email: e.target.value});
  };

  onPswdEnter = (e) => {
    if (e.key === 'Enter') {
      this.login();
    }
  };

  login = () => {
    let form = new FormData();
    form.append("email", this.state.email);
    form.append("password", this.state.password);

    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', form)
      .then(res => {
        alert("Login Success!")
      })
      .catch(() => alert("Login failed, please try again"));
  };

  render() {

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
      <div className="login-container">
        <input
          id="login-email-input"
          type="text"
          placeholder="Email"
          onChange={this.onEmailChange}
          onKeyPress={this.onEmailEnter}
          style={emailIcon}
        />
        <input
          id="login-password-input"
          type="text"
          placeholder="Password"
          onChange={this.onPswdChange}
          onKeyPress={this.onPswdEnter}
          style={passwordIcon}
        />
        <div className="auth-btn" onClick={this.login}>LOG IN</div>
      </div>
    )
  }
}