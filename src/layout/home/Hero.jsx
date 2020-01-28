import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const roles = [
    'Technical Support Engineer',
    'Full Stack Developer',
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
              <h1>Hello</h1>
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
