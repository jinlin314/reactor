import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css';
import Banner from './Banner';
import Gallery from './Gallery';
import Thumbnails from './Thumbnails';
import Subscribe from './Subscribe';
import {text, gallery} from './data';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Grid fluid={true}>
          <Row className="show-grid what-we-do">
            <Col sm={12} md={6}><h2>WHAT WE DO</h2></Col>
            <Col sm={12} md={6}>
              <div>
                <p className="caption text">We do</p>
                {text}
              </div>
            </Col>
          </Row>
          <Thumbnails text={text} />
          <Gallery gallery={gallery} />
          <Subscribe/>
        </Grid>
        <footer>
          footer
        </footer>

      </div>
    );
  }
}

export default Home;
