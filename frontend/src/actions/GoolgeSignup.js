import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';
export const GOOGLELOGIN = 'GOOGLELOGIN';


export async function GoogleSignup(values,callback){
  const googleApi = 'api/google/signup';
  const signupGoogle = await axios.post(`${BACKEND_URL}${googleApi}`,values);
  if(signupGoogle.data.token){
    localStorage.setItem('authToken', signupGoogle.data.token);
    callback(true);
    return {
      type:GOOGLELOGIN,
      payload:signupGoogle
    }
  }
  else{
    callback(false);
    localStorage.setItem('authToken', '');
    return {
      type:GOOGLELOGIN,
      payload: { data : false}
    }
  }

}
