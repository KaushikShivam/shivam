import React from 'react';
import Typed from 'react-typed';

import Social from './../../components/Social';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Technical Support Engineer',
    'Founder',
    'Entrepreneur',
    'Mentor'
  ];
  return (
    <section className="Hero">
      <div className="container">
        <div className="row">
          <div className="Hero__wrapper">
            <div className="Hero__content">
              <h1>Shivam</h1>
              <br />
              <span className="Hero__typed">
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="Hero__typed--self"
                />
              </span>
              <Social />
            </div>
          </div>
          <div className="Hero__mouse">
            <div className="Hero__mouse--scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
