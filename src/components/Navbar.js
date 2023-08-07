import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/search?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-blockquote-left me-2"></i>
          <img src={process.env.PUBLIC_URL + '/images/block1.jpg'} alt="Blockchain Icon" width="30" height="30" className="me-2" />
          BlockchainTechnology
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/latest-tech-blogs">
                Latest TechBlogs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/interesting-topics"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Topics
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/interesting-topics/blockchain">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/interesting-topics/ai">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/interesting-topics/defi">
                    Decentralized Finance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/interesting-topics/web3">
                    Web3
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button className='btn btn-primary btnn'>SIGN UP</button>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {searchResults.length > 0 && (
            <div className="search-results">
              <h4>Search Results:</h4>
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>{result.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
