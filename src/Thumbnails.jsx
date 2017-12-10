import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  const thumbNail1 = (<div className="Thumbnail-container">
    <div className="Thumbnail-img">
      <img src="img/1.png" alt="thumbnail 1" />
    </div>
    <div className="Thumbnail-text">
      <div className="text"><h4>Regional Cuisine Down Home Southern Cooking</h4></div>
      {props.text}
    </div>
  </div>)

  const thumbNail2 = (<div className="Thumbnail-container">
    <div className="Thumbnail-img">
      <img src="img/2.png" alt="thumbnail 2" />
    </div>
    <div className="Thumbnail-text">
      <div className="text"><h4>Pos Hardware More Options In Less Space</h4></div>
      {props.text}
    </div>
  </div>)

  return (
    <Row className="show-grid Thumbnails-background">
      <Col sm={12} md={6}>{thumbNail1}</Col>
      <Col sm={12} md={6}>{thumbNail2}</Col>
    </Row>
  )
}