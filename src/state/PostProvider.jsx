import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from '../reducers/postReducer';

export const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (   
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}

export const useSelector = selectorFn => {
  const { state } = useContext(PostContext);

  return selectorFn(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(PostContext);
  return dispatch;
};
