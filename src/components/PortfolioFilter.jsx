import React, { useState } from 'react';

const PortfolioFilter = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className="PortfolioFilter">
      <button
        className={`PortfolioFilter__nav ${toggle && 'open'}`}
        onClick={handleClick}
      >
        <span className="PortfolioFilter__icons">
          <span className="line line01"></span>
          <span className="line line02"></span>
          <span className="line line03"></span>
          <span className="line line04"></span>
        </span>
      </button>
      <div className={`PortfolioFilter__work ${toggle && 'open'}`}>
        <button className="filter active">All</button>
        <button className="filter">Ruby On Rails</button>
        <button className="filter">React</button>
        <button className="filter">MERN</button>
        <button className="filter">NodeJS</button>
        <button className="filter">NextJS</button>
      </div>
    </div>
  );
};

export default PortfolioFilter;
