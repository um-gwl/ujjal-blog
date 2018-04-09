import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/login.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Ujjal Blog</h1>
          <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
          mobile-first projects on the web.</p>
        </div>
        <div className="container">
          <p>This is some text.</p>
          <p>This is another text.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
