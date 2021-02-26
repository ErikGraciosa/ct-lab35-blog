import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';
import styles from './PostForm.css';

function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>New Post Entry</p>
        <label>Title
          <input 
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}>
          </input>
        </label> 
        <label>Body
          <input 
            type="text"
            value={body}
            onChange={({ target }) => setBody(target.value)}></input>
        </label>
        <button>Add Post</button> 
      </form>
    </div>
  );
}

export default PostForm;
