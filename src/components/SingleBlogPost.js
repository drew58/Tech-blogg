import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`/api/posts/${postId}`); // Replace with your API endpoint
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    fetchPost();
  }, [postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default SingleBlogPost;
