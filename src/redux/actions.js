// src/redux/actions.js
export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post,
  });
  
  export const editPost = (post) => ({
    type: 'EDIT_POST',
    payload: post,
  });
  
  export const deletePost = (id) => ({
    type: 'DELETE_POST',
    payload: id,
  });
  
  export const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
  });
  