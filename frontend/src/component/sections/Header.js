import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {userLoginData} from '../../actions/UserSignup';
import {logoutUser} from '../../helpers/loginHelper';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickLogoutUser = this.onClickLogoutUser.bind(this);
    this.props.userLoginData();
  }

  onClickLogoutUser(){
    logoutUser((status)=>{
      if(status){
        this.props.history.push('/login');
        this.props.userLoginData();
      }
      else{
        alert("Error occured!! try again later");
      }
    })
  }

  renderNavMenu(){
    const userData = this.props.loginUser;
    if(userData.status){
      return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a onClick={this.onClickLogoutUser}>Logout</a></li>
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

export default connect(mapStateToProps,{userLoginData})(withRouter(Header));
