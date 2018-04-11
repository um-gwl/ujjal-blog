import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {userLoginData} from '../actions/UserSignup';
import {connect} from 'react-redux';


class PostCreate extends Component {
  constructor(props){
    super(props);
    this.props.userLoginData().then(()=>{
      const userData = this.props.loginUser;
      console.log(userData);
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

  renderFormField(field){
    const { meta : { touched,error}} = field;
    const validationClass = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={validationClass}>
        <h5>{field.label}:</h5>
        <input type="text" name = {field.name} className="form-control" value="" {...field.input}/>
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
      console.log(values);
      // const postData = {
      //   title:values.postTitle,
      //   content:values.content,
      //   categories:values.category
      // };
      // this.props.createPost(postData,()=>{ this.props.history.push('/posts')});
  }

  render() {

    const {handleSubmit} = this.props;

    return (
      <div className="container">
        <div className='row'>
          <div className='col s12 m12'>&nbsp;</div>
          <div className='col s12 m12 text-right'>
            <Link to='/posts'>Back to posts</Link>
          </div>
          <div className='col s12 m12'>&nbsp;</div>
          <div className='col s12 m12'>
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label = "Title"
                name = "postTitle"
                component = {this.renderFormField}
              />
              <Field
                label = "Category"
                name = "category"
                component = {this.renderFormField}
              />
              <Field
                label = "Description"
                name = "description"
                component = {this.renderFormField}
              />
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.postTitle){
    errors.postTitle = "Please enter the title";
  }
  if(!values.category){
    errors.category = "Please enter the category";
  }
  if(!values.description){
    errors.description = "Please enter the description";
  }
  // console.log(errors);
  return errors;
}

function mapStateToprops({loginUser}){
  return {
    loginUser
  }
}

export default reduxForm({
  validate,
  form :'postFormCreate'
})(
  connect(mapStateToprops,{userLoginData})(PostCreate)
);
