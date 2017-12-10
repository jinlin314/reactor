import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  return (
    <Row className="show-grid gallery">
      <h3>Maui By Air The Best Way Around The Island</h3>
      <div className="gallery-img-wrapper">
        {
          props.gallery.map((element, idx) => {
            return (<Col xs={12} sm={6} md={4} lg={3} key={`place${idx}`}>
              <img className="gallery-img" src={element.url} alt="img3" />
              <h4 className="gallery-description">{element.description}</h4>
              <div className="caption">{element.address}</div>
            </Col>)
          })
        }
      </div>
    </Row>
  )
}