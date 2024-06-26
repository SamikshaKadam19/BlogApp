// src/components/BlogList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogPost from './BlogPost';
import BlogEditor from './BlogEditor';
import { Button } from '@mui/material';

const BlogList = () => {
  const posts = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = React.useState(null);

  return (
    <div>
      <Button onClick={() => setEditingPost(null)} variant="contained">
        New Post
      </Button>
      {editingPost ? (
        <BlogEditor existingPost={editingPost} />
      ) : (
        <BlogEditor />
      )}
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} setEditingPost={setEditingPost} />
      ))}
    </div>
  );
};

export default BlogList;
