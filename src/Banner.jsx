import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default () => {
  return (
    <Jumbotron>
      <img src="img/banner.png" alt="banner"/>
      <div className="nav">
        <span className="logo">Reacor</span>
        <span className="login">Login</span>
      </div>
      <div className="slogan"><h1>Hello, welcome to Reactor</h1></div>
    </Jumbotron>
  )
}