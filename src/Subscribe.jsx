import React from 'react';
import { Row } from 'react-bootstrap';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  onEmailEnter = (e) => {
  }

  render() {
    return (
      <Row>
        <div className="subscribe-container">
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <input
            className="email-input"
            placeholder="Your Email"
            type="text"
          />
          <div className="subscribe-btn">Subscribe</div>
        </div>
      </Row>
    )
  }
}