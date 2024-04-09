import React from 'react';
import './index.css'; // Adjust the path as needed

const Header = () => (
  <header>
    <div className="header-container">
      <div id="logo">AGNES ERIKA</div>
      <nav>
        <ul>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
