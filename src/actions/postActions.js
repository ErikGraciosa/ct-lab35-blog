// posts have a title and body
// you can create a post
// you can delete a post
// BONUS: you can update a post by passing an id and new body
export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = title => ({
  type: DELETE_POST,
  payload: title
});
