import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  renderNavMenu(){
    const userData = this.props.loginUser;
    if(userData){
      return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
      );
    }
    else{
      return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Login</Link></li>
          </ul>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="col s12">
            <Link to="/" className="brand-logo">Ujjal Blog</Link>
            {this.renderNavMenu()}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({loginUser}){
  return {loginUser};
}

export default connect()(Header);
