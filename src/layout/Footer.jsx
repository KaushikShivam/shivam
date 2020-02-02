import React from 'react';
import logoWhite from './../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <ul className="socials">
          <li className="facebook">
            <a href="#" data-hover="Linkedin">
              Linkedin
            </a>
          </li>
          <li className="twitter">
            <a href="#" data-hover="Github">
              Github
            </a>
          </li>
          <li className="gplus">
            <a href="#" data-hover="Angellist">
              Angellist
            </a>
          </li>
          <li className="facebook">
            <a href="#" data-hover="Medium">
              Medium
            </a>
          </li>
          <li className="twitter">
            <a href="#" data-hover="Stackoverflow">
              Stackoverflow
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
