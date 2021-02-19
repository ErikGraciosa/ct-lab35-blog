import React from 'react';
import Post from './Post';
import { useSelector } from '../../state/PostProvider';
import { getPosts } from '../../selectors/postSelectors';


function PostList() {
  const posts = useSelector(getPosts);

  return (
    <div >
      {posts.map(post => <Post key={post.title} {...post}/>)}
    </div>
  );
}

export default PostList;
