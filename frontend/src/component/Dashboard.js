import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {checkLogin} from '../helpers/userHelpers';

import '../css/login.css';

class Dashboard extends Component {
  componentWillMount(){
    const _token = localStorage.getItem('authToken');
    checkLogin(_token,(response)=>{
      if(!response){
        this.props.history.push('/login');
      }
    });
  }
  render() {
    return (
      <div className="login-box">
        <h1>Dashboard</h1>
        <div className='row'>
          <div className='col-sm-12'>&nbsp;</div>
          <div className='col-sm-8 text-right'>
            <Link className='btn btn-primary' to='/posts/create'>Create post</Link>
          </div>
          <div className='col-sm-4 text-right'>
            <button className='btn btn-danger'>logout</button>
          </div>
          <div className='col-sm-12'>
            <h1>Posts from the backend</h1>
            <ul className='list-group'>
              <li className='list-group-item'>post 1</li>
              <li className='list-group-item'>post 2</li>
              <li className='list-group-item'>post 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
