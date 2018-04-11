import {POSTSLIST} from '../actions/PostsAction';

export default (state = {},action) => {
  switch(action.type){
    case POSTSLIST:
      return action.payload.data;
    default:
    return state;
  }
}
