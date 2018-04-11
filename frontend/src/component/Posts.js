import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {userLoginData} from '../actions/UserSignup';
import {postsList} from '../actions/PostsAction';


const textRight = {
  float:'right'
}
class Posts extends Component {
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

  componentWillMount(){
    this.props.postsList();
  }

  renderPost(){
    const posts = this.props.posts;
    if(posts){
      return (
          <li className="collection-item avatar">
            <span className="title">No Post Found</span>
          </li>
      );
    }
    else{
      return (
        <li className="collection-item avatar">
           <img src="https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg" alt="" className="circle"/>
           <span className="title">Title</span>
           <p>First Line <br/>
              Second Line
           </p>
           <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
         </li>
      );
    }

  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col s12 m12">&nbsp;</div>
          <div className="col s12 m12">
            <Link to="/post/create" className="btn waves-effect waves-light" style={textRight}><i className="material-icons right">send</i>Create Post</Link>
          </div>
          <div className="col s12 m12">
            <ul className="collection with-header">
              <li className="collection-header">
                <h3>Posts</h3>
              </li>
              {this.renderPost()}
             </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToprops({loginUser,posts}){
  return {
    loginUser,
    posts
  };
}

export default connect(mapStateToprops,{userLoginData,postsList})(Posts);
