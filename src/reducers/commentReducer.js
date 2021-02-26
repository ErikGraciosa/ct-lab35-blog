import { DELETE_COMMENT, CREATE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      //find post where comment is added, add the comment in the array.
      return {
        ...state,
        posts: [...state.posts, 
          { title: 'action', body: 'the body', comments: [action.payload] }]
        
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.title !== action.payload)
      };
    default:
      return state;
  }
}
