import React from 'react';

// Components
import Hero from '../layout/home/Hero';
import Work from '../layout/home/Work';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage__content">
        <Hero />
        <Work />
      </div>
    </div>
  );
};

export default Homepage;
