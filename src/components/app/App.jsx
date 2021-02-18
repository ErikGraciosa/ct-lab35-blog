import React from 'react';
import Header from '../header/Header';
import PostForm from '../postForm/PostForm';
import PostList from '../postList/PostList';

export default function App() {
  return (
    <>
      <Header />
      <PostForm />
      <PostList />
    </>
  );
}
