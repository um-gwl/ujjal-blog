import {combineReducers} from 'redux';
import googleLogin from './googleLogin';

 const rootReducers = combineReducers({
   loginUser : googleLogin
});

export default rootReducers;
