import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios or use the built-in fetch
import { Link } from 'react-router-dom'; // For linking to individual posts


const PostList = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const response = await axios.get('/api/posts'); // Fetch posts from your backend API
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
  
      fetchPosts();
    }, []);
  
    return (
      <div>
        <h2>Latest Posts</h2>
        <ul>
        {posts.map(post => (
       <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))}
</ul>

      </div>
    );
  };
  
  export default PostList;
  