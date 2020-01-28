import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => setMenuToggle(!menuToggle);

  return (
    <div className={`Navbar ${menuToggle && 'Navbar--show'}`}>
      <div className="Navbar__sticky">
        <div className="logo">
          <Link className="Navbar__brand" to="/">
            Shivam Kaushik
          </Link>
        </div>
      </div>
      <div className="Navbar__nav">
        <nav className="Navbar__menu">
          <div className="Navbar__list">
            <Link to="/" onClick={handleClick}>
              <span>Home</span>
            </Link>
            <Link to="/portfolios" onClick={handleClick}>
              <span>Portfolio</span>
            </Link>
            <Link to="/certifications" onClick={handleClick}>
              <span>Certifications</span>
            </Link>
            <Link to="/blogs" onClick={handleClick}>
              <span>Blog</span>
            </Link>
            <Link to="/" onClick={handleClick}>
              <span>Contact</span>
            </Link>
          </div>
        </nav>
        <button className="Navbar__close" onClick={handleClick}>
          Close Menu
        </button>
      </div>
      <button className="Navbar__ham" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Navbar;
