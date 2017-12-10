import React from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  onEmailEnter = (e) => {
    if (e.key === 'Enter') {
      this.subscribe();
    }
  };

  subscribe = () => {
    let email = this.state.email.trim();
    // eslint-disable-next-line
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      alert("Invalid Email")
    } else {
      let form = new FormData();
      form.append("email", this.state.email);

      axios.post('http://dev3.apppartner.com/Reactors/scripts/add-email.php', form)
        .then(res => {
          alert("status: " + res.data.stauts + "\n messge: " + res.data.message)
        })
        .catch(console.error);
    }
  };

  render() {
    return (
      <Row>
        <div className="subscribe-container">
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <input
            className="email-input"
            type="text"
            placeholder="Your Email"
            onChange={this.onEmailChange}
            onKeyPress={this.onEmailEnter}
          />
          <div className="subscribe-btn" onClick={this.subscribe}>Subscribe</div>
        </div>
      </Row>
    )
  }
}