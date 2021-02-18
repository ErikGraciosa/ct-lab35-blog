import React from 'react';
import styles from './Post.css';

function Post() {
  return (
    <div className={styles.singlePost}>
      <p>title</p>
      <p>body</p>
      <button>delete</button>
    </div>
  );
}

export default Post;
