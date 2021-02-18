// import { deletePost } from '../actions/postActions';
import { reducer } from './postReducer';
import { createPost } from '../actions/postActions';

describe('post reducer tests', () => {
  it('test of create a post', () => {
    const state = {
      posts: []
    };

    const post = {
      title: 'How to tie shoes',
      body: 'loop and swoop'
    };

    const action = createPost(post);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{
        title: 'How to tie shoes',
        body: 'loop and swoop'
      }]
    });
    


  });
});
