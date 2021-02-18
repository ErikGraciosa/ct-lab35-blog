import React from 'react';
import styles from './PostForm.css';

function PostForm() {
  return (
    <div>
      <form>
        <p>New Post Entry</p>
        <label>Title
          <input type="text"></input>
        </label> 
        <label>Body
          <input type="text"></input>
        </label>
        <button>Add Post</button> 
      </form>
    </div>
  );
}

export default PostForm;
