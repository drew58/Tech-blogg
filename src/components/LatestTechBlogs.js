import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../blog-card.css'; // Import the styles

const LatestTechBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        const response = await axios.get('/api/posts'); // Updated API endpoint
        setLatestBlogs(response.data);
      } catch (error) {
        console.error('Error fetching latest blogs:', error);
      }
    }

    fetchLatestBlogs();
  }, []);

  return (
    <div className="container mt-4  transition-text">
      <div className="d-flex justify-content-between">
        <div className="w-90 topic-container3">
          <h2 className='h2 multi-colored-text'>
            {Array.from('Latest TechBlogs').map((letter, index) => (
              <span key={index} className={`color-${index % 5}`}>{letter}</span>
            ))}
          </h2>
          <p>
          <h5 className='h5'>Author: Andrew enahoro
            <p className='pp'>August,8th-2023</p>
          </h5>
            The world of technology is constantly changing, and there are always new and exciting developments to keep up with.
            If you're interested in staying ahead of the curve, then you need to be reading the latest technology blogs.
            There are a number of great technology blogs out there, but here are a few of our favorites:
          </p>
          <ul className="blog-list">
            {latestBlogs.map(blog => (
              <li key={blog.id} className="blog-item">
                <strong>{blog.title}</strong>: {blog.description}
              </li>
            ))}
          </ul>
          <p>
            These are just a few of the many great technology blogs out there. If you're looking for a way to stay ahead of the curve,
            then be sure to check them out.
            In addition to these general technology blogs, there are also a number of great blogs that focus on specific areas of technology.
            For example, if you're interested in cryptocurrency, then you should check out CoinDesk and The Block.
            And if you're interested in artificial intelligence, then you should check out Medium and Google AI Blog.
            No matter what your interests are, there's sure to be a technology blog out there that's perfect for you.
            So start exploring and find the ones that you enjoy reading the most.
            Here are some tips for finding the best technology blogs for you:
          </p>
          <ul className="tips-list">
            <li>Start with the blogs that you already know and love. What are your favorite tech websites? Do they have a blog? If so, start there.</li>
            <li>Look for blogs that cover topics that you're interested in. If you're interested in cryptocurrency, then look for blogs that cover that topic.</li>
            <li>Read the blogroll of your favorite blogs. Many blogs have a list of other blogs that they recommend. This is a great way to find new blogs to read.</li>
            <li>Follow tech journalists on Twitter. Many tech journalists have Twitter accounts where they share links to their latest articles. This is a great way to keep up with the latest tech news.</li>
          </ul>
          <p>
            With a little bit of effort, you can find a great selection of technology blogs that you'll enjoy reading.
            So what are you waiting for? Start exploring today!
          </p>
        </div>
        
        <div className="w-70 topic-container2">
          <div className=" ">
          <h3>LATEST</h3>
            <ul className="list-unstyled">
              <li>
              <img
        src={process.env.PUBLIC_URL + '/images/NLP.jpg'}
        alt="NLP"
        className="topic-image"
        width="100"
        
      />
      <h3>Top 10 Ai trends</h3><a href="interesting-topics/ai" className="ai-link">
                <span>AI Tech 1: Neural Networks</span>
          Neural networks are a fundamental component of AI, inspired by the
          human brain.</a></li>
            </ul>
            <hr/>
            
              <img
        src={process.env.PUBLIC_URL + '/images/blockchain.png'}
        alt="blockchain"
        className="topic-image"
        width="100"
        
      />

<hr/>
      <h3>Blockchain</h3><a href="interesting-topics/ai" className="ai-link">
                <span>Blockchain Tech</span>
                Blockchain technology is a decentralized and distributed digital
        ledger that records</a>


        
              <img
        src={process.env.PUBLIC_URL + '/images/Defi.jpg'}
        alt="Defi"
        className="topic-image"
        width="100"
        
      />
      <hr/>
      <h3>Decentralized Finance</h3><a href="interesting-topics/defi" className="ai-link">
                
                Explore the exciting world of decentralized finance (DeFi) and its impact on traditional financial systems. <br/>
        From decentralized exchanges.</a>




         
              <img
        src={process.env.PUBLIC_URL + '/images/web3.jpg'}
        alt="web 3"
        className="topic-image"
        width="100"
        
      />


<hr/>
      <h3>Web 3</h3><a href="interesting-topics/web3" className="ai-link">
                
      Dive into the concept of Web3 and the evolution of the decentralized web.
        Explore the shift from centralized platforms to decentralized.</a>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default LatestTechBlogs;
