import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Post.css';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import CommentForm from '../commentForm/CommentForm';
import CommentList from '../comments/CommentsList';

function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost((title)));
  };

  return (
    <div className={styles.singlePost}>
      <p>{title}</p>
      <p>{body}</p>
      <CommentForm/>
      <CommentList />
      <button onClick={handleClick}>Delete Post</button>
      
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
