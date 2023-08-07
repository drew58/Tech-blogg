// backend/server.js
const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'blog',
  password: 'Diego5720202019',
  port: 5050,
});

const PORT = process.env.PORT || 5000;

app.use(express.json()); // Add this line to parse JSON requests

// ... other routes ...

app.get('/api/posts', async (req, res) => {
  try {
    const currentPage = req.query.page || 1;
    const itemsPerPage = req.query.itemsPerPage || 10;
    const offset = (currentPage - 1) * itemsPerPage;

    const result = await pool.query(
      'SELECT * FROM posts LIMIT $1 OFFSET $2',
      [itemsPerPage, offset]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/comments/:postId', async (req, res) => {
    const { postId } = req.params;
    const { name, comment } = req.body;
    try {
      await pool.query('INSERT INTO comments (post_id, name, comment) VALUES ($1, $2, $3)', [postId, name, comment]);
      res.json({ message: 'Comment added successfully' });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


app.get('/api/search', async (req, res) => {
    try {
      const searchQuery = req.query.query;
      const query = `SELECT * FROM posts WHERE title ILIKE '%${searchQuery}%' OR content ILIKE '%${searchQuery}%'`;
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching search results:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
