import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {
  const banner = {
    backgroundImage: 'url("img/banner.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto"
  };
  return (
    <Jumbotron style={banner}>
      <div className="nav">
        <Link to="/home"><span className="logo">Reacor</span></Link>
        <Link to="/auth"><span className="login">Login</span></Link>
      </div>
      <div className="slogan"><h1>Hello, welcome to Reactor</h1></div>
    </Jumbotron>
  )
}