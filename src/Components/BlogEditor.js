// src/components/BlogEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { addPost, editPost } from '../redux/actions';
import { Button, TextField } from '@mui/material';

const BlogEditor = ({ existingPost }) => {
  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [content, setContent] = useState(
    existingPost ? existingPost.content : ''
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (existingPost) {
      dispatch(editPost({ ...existingPost, title, content }));
    } else {
      dispatch(
        addPost({
          id: Date.now(),
          title,
          content,
        })
      );
    }
  };

  return (
    <div>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <ReactQuill value={content} onChange={setContent} />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        {existingPost ? 'Edit Post' : 'Add Post'}
      </Button>
    </div>
  );
};

export default BlogEditor;
