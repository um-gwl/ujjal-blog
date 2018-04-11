import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';

export async function googleLogin(values,callback){
  const googleApi = 'api/google/signup';
  const signupGoogle = await axios.post(`${BACKEND_URL}${googleApi}`,values);
  if(signupGoogle.data.token){
    localStorage.setItem('authToken', signupGoogle.data.token);
    callback(true);
  }
  else{
    callback(false);
  }
}

export async function logoutUser(callback){
  const googleApi = 'api/logout';
  const _token = localStorage.getItem('authToken');
  axios.defaults.headers.common['Authorization-token'] = _token;
  const signupGoogle = await axios.get(`${BACKEND_URL}${googleApi}`);
  if(signupGoogle.data.status){
    localStorage.setItem('authToken', '');
    callback(true);
  }
  else{
    callback(false);
  }
}
