import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import LatestTechBlogs from './components/LatestTechBlogs';
import DecentralizedFinance from './components/DecentralizedFinance';
import Blockchain from './components/Blockchain';
import Web3 from './components/Web3';
import ArtificialIntelligence from './components/ArtificialIntelligence';
import SingleBlogPost from './components/SingleBlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/latest-tech-blogs" element={<LatestTechBlogs />} />
          <Route path="/interesting-topics/blockchain" element={<Blockchain />} />
          <Route path="/interesting-topics/ai" element={<ArtificialIntelligence />} />
          <Route path="/interesting-topics/defi" element={<DecentralizedFinance />} />
          <Route path="/interesting-topics/web3" element={<Web3 />} />
          <Route path="/posts/:postId" element={<SingleBlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
