import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Post.css';
// import { useDispatch } from '../../state/PostProvider';
import { deletePost } from '../../actions/postActions';
import CommentList from '../comments/CommentsList';

function Post({ title, body }) {
  // const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(deletePost((title)));
  };

  return (
    <div className={styles.singlePost}>
      <p>{title}</p>
      <p>{body}</p>
      <CommentList />
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
