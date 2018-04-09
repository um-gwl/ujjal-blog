import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';

export async function checkLogin(AUTH_TOKEN,callback){
  const checkLoginApi = 'auth/check';
  axios.defaults.headers.common['Authorization-token'] = AUTH_TOKEN;
  const authStatus = await axios.get(`${BACKEND_URL}${checkLoginApi}`).then(
    response => {
      if(response.data.status){
        return true;
      }
      else{
        return false;
      }
    }
  );
  callback(authStatus);
}
