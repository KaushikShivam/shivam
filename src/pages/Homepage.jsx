import React from 'react';

// Components
import Hero from '../layout/home/Hero';
import Work from '../layout/home/Work';
import Detail from '../layout/home/Detail';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="Homepage__content">
        <Hero />
        <Work />
        <Detail
          type="Professional Experience"
          content="A multi-skilled leader with hands-on experience in developing, leading and cofounding tech startups by bringing together vision, strategy, and execution in a totally unstructured and resource-constrained environment."
        />
      </div>
    </div>
  );
};

export default Homepage;
