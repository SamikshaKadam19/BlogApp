// src/redux/reducers.js
import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'EDIT_POST':
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const theme = (state = 'light', action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  theme,
});
