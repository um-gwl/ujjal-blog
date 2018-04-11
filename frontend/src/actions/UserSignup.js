import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';

export const USERLOGINDATA = 'USER_LOGIN_DATA';


export async function userLoginData(){
  const checkLoginApi = 'auth/check';
  const _token = localStorage.getItem('authToken');
  axios.defaults.headers.common['Authorization-token'] = _token;
  const authStatus = await axios.get(`${BACKEND_URL}${checkLoginApi}`);
  return {
    type:USERLOGINDATA,
    payload: authStatus
  }

};
