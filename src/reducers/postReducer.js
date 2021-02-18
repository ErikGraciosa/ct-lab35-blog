// store an array of posts
// handle create a post
// handle delete a post
// BONUS: handle update a post by index

import { DELETE_POST, CREATE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export function reducer(state, action) {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.title !== action.payload)
      };
    default:
      return state;
  }
}
