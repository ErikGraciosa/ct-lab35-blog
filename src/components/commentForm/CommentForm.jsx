import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';

function CommentForm() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createComment({ comment }));
  };

  return (
    <>
    Comment Form Here
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Add comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}>
        </input>
        <button>Add Comment</button>
      </form>
    </>
  );
}

export default CommentForm;
