import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsComponent = ({ postId }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'drew58/Tech-blogg');
    script.setAttribute('data-category', 'Comments'); // Replace with your chosen category name
    script.setAttribute('data-category-id', 'comments'); // Replace with your chosen category slug
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Append the Giscus script to the document head
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmitComment = async () => {
    try {
      await axios.post(`/api/comments/${postId}`, { name, comment });
      // Refresh Giscus comments after submitting
      if (window.giscus) {
        window.giscus.comments.fetch();
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="comments-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="comment-input"
      />
      <textarea
        placeholder="Leave a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment-textarea"
      />
      <button onClick={handleSubmitComment} className="comment-btn">Submit Comment</button>
      {/* Display Giscus comments here */}
      <div id="giscus-comments"></div>
    </div>
  );
};

export default CommentsComponent;
