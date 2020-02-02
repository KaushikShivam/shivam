/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logoWhite from './../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <ul className="socials">
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/kShivamDev/"
              data-hover="Linkedin"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/KaushikShivam"
              target="_blank"
              data-hover="Github"
            >
              Github
            </a>
          </li>
          <li className="angellist">
            <a
              href="https://angel.co/kshivamdev"
              target="_blank"
              data-hover="Angellist"
            >
              Angellist
            </a>
          </li>
          <li className="medium">
            <a
              href="https://medium.com/@shivamkaushikofficial"
              target="_blank"
              data-hover="Medium"
            >
              Medium
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://twitter.com/kShivamDev"
              target="_blank"
              data-hover="twitter"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <img src={logoWhite} alt="logo bottom" />
        <ul className="icons">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/kShivamDev/">
              <i className="fab fa-linkedin-in icon" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/KaushikShivam">
              <i className="fab fa-github-alt icon" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://medium.com/@shivamkaushikofficial">
              <i className="fab fa-medium-m icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://stackoverflow.com/users/5197835/shivamkaushik"
            >
              <i className="fab fa-stack-overflow icon" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/kShivamDev">
              <i className="fab fa-twitter icon" />
            </a>
          </li>
        </ul>
        <p className="copy">
          Build with <i className="fas fa-heart icon"></i>
          using the MERN stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
