// src/components/BlogPost.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions';
import { Button, Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ post, setEditingPost }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <Button onClick={() => setEditingPost(post)}>Edit</Button>
        <Button
          onClick={() => dispatch(deletePost(post.id))}
          color="secondary"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
