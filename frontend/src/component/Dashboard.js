import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {userLoginData} from '../actions/UserSignup';


import '../css/login.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.props.userLoginData().then(()=>{
      const userData = this.props.loginUser;
      if(!userData){
        return (
            <div>Loading....</div>
        );
      }

      if(!userData.status){
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Dashboard</h1>
        <div className='row'>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Your Posts</span>
                <p>This card is only for posts.click below to see all the posts posted by you</p>
              </div>
              <div className="card-action">
                <Link to='/posts'>Show Posts</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToprops({loginUser}){
  return {
    loginUser
  };
}

export default connect(mapStateToprops,{userLoginData})(Dashboard);
