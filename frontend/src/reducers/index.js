import {combineReducers} from 'redux';
import userLoginData from './userLogin';
import postsReducer from './postsReducer';
import {reducer as formReducer} from 'redux-form';

 const rootReducers = combineReducers({
   loginUser : userLoginData,
   posts:postsReducer,
   form : formReducer
});

export default rootReducers;
