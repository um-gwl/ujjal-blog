import {GOOGLELOGIN} from '../actions/GoolgeSignup';

export default (state = null,action) => {
  switch(action.type){
    case GOOGLELOGIN:
      return action.payload.data;
    default:
    return state;
  }
}
