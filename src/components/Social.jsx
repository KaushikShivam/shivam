/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Social = () => {
  return (
    <ul className="Social">
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/kShivamDev/">
          <i className="fab fa-linkedin-in Social__icon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/KaushikShivam">
          <i className="fab fa-github-alt Social__icon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://medium.com/@shivamkaushikofficial">
          <i className="fab fa-medium-m Social__icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://stackoverflow.com/users/5197835/shivamkaushik"
        >
          <i className="fab fa-stack-overflow Social__icon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/kShivamDev">
          <i className="fab fa-twitter Social__icon" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
