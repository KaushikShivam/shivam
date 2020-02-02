import React from 'react';
import logoWhite from './../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <ul className="socials">
          <li className="facebook">
            <a href="#" data-hover="Facebook">
              Facebook
            </a>
          </li>
          <li className="twitter">
            <a href="#" data-hover="Twitter">
              Twitter
            </a>
          </li>
          <li className="gplus">
            <a href="#" data-hover="Google +">
              Google +
            </a>
          </li>
          <li className="facebook">
            <a href="#" data-hover="Facebook">
              Facebook
            </a>
          </li>
          <li className="twitter">
            <a href="#" data-hover="Twitter">
              Twitter
            </a>
          </li>
          <li className="gplus">
            <a href="#" data-hover="Google +">
              Google +
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <img src={logoWhite} alt="logo bottom" />
        <p>Build with love using the MERN stack</p>
      </div>
    </footer>
  );
};

export default Footer;
