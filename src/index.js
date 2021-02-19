import React from 'react';
import { Provider } from 'react-dom';
import { render } from 'react-dom';
import App from './components/app/App';
import store from './store';

//Here we introduce the global store 
//and remove the PostProvider we setup before with useContext

render(
  <Provider store={store}>
    <App />    
  </Provider>,
  document.getElementById('root')
);
