import React from 'react';
import { PostProvider } from './state/PostProvider';
import { render } from 'react-dom';
import App from './components/app/App';

render(
  <PostProvider>
    <App />    
  </PostProvider>,
  document.getElementById('root')
);
