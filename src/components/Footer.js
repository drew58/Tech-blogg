import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light footer text-center py-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Blockchain Technology. All Rights Reserved.</p>
        <p>Follow us on social media: <a href="https://twitter.com/Mutantdreww">Twitter</a> | <a href="https://github.com/drew58">Github</a> | <a href="https://www.linkedin.com/in/enahoro-andrew-1610061b4">Linkedin</a></p>
        <p>Contact us at: contact@BlockchainTechnology.com</p>
      </div>
      
    </footer>
  );
};

export default Footer;
