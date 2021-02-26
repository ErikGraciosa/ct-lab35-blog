import  reducer  from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

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

  it('test of create a post', () => {
    let state = {
      posts: []
    };
    const post = {
      title: 'How to tie shoes',
      body: 'loop and swoop'
    };
    const action = createPost(post);
    state = reducer(state, action);

    const post2 = {
      title: 'sweep',
      body: 'small sections'
    };
    const action2 = createPost(post2);
    state = reducer(state, action2);

    expect(state).toEqual({
      posts: [{
        title: 'How to tie shoes',
        body: 'loop and swoop'
      },
      {
        title: 'sweep',
        body: 'small sections'
      }]
    });

    const deleteAction = deletePost('How to tie shoes');

    state = reducer(state, deleteAction);
    expect(state).toEqual({
      posts: [{
        title: 'sweep',
        body: 'small sections'
      }]
    });
  });
});
