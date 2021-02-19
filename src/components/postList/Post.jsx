import React from 'react';
import styles from './Post.css';
import { useDispatch } from '../../state/PostProvider';
import { deletePost } from '../../actions/postActions';
 

function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('delete button clicked');
    dispatch(deletePost((title)));
  };

  return (
    <div className={styles.singlePost}>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default Post;
