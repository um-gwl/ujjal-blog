import axios from 'axios';
import {BACKEND_URL} from '../constants/constants';

export const POSTSLIST = 'POSTS_LIST';


export async function postsList(){
  const getPostsList = 'api/posts';
  const _token = localStorage.getItem('authToken');
  axios.defaults.headers.common['Authorization-token'] = _token;
  const postsList = await axios.get(`${BACKEND_URL}${getPostsList}`);
  return {
    type:POSTSLIST,
    payload: postsList
  }

};

export async function createPost(){
  return {};
}
