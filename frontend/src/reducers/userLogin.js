import {USERLOGINDATA} from '../actions/UserSignup';

export default (state = {},action) => {
  switch(action.type){
    case USERLOGINDATA:
      return action.payload.data;
    default:
    return state;
  }
}
