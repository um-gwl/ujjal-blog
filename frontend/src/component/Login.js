import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import {connect} from 'react-redux';
import {GoogleSignup} from '../actions/GoolgeSignup';
import '../css/login.css';


class Login extends Component {

  responseGoogle = (response) => {
    console.log(response);
    const postData = {
      googleID: response.googleId,
      email: response.profileObj.email,
      name: response.profileObj.name
    };
    this.props.GoogleSignup(postData,(isLoggedin)=>{
      if(isLoggedin){
        this.props.history.push('/dashboard');
      }
      else{
        alert('Log in failed');
      }
    });
  }

  responseGoogleError = (response) => {
    console.log('Login failed');
  }

  render() {
    console.log(this.props.loginUser);
    return (
      <div className="login-box">
        <div className="login-logo">
          <b>Ujjal</b>Blog
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col s8">
                <div className="checkbox icheck">
                </div>
              </div>
              <div className="col s4">
                <button type="submit" className="btn waves-effect waves-light">Login</button>
              </div>
            </div>
          </form>

          <div className="row social-auth-links text-center">
            <p className ="col s12">- OR -</p>
            <GoogleLogin
              clientId="305542172753-bf51h372fugjee0ibq3j5uegsch2d3fi.apps.googleusercontent.com"
              buttonText="Sign in using
                Google+"
              className="btn btn-social btn-google col s12"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogleError}
            />
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps({loginUser}){
  return {
    loginUser
  };
}

export default connect(mapStateToProps,{GoogleSignup})(Login);
