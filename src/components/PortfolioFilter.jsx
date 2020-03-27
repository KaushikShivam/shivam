import React, { useState } from 'react';

const PortfolioFilter = ({ handleFilter }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  const handleSelect = e => {
    handleFilter(e);
  };

  return (
    <div className="PortfolioFilter">
      <button
        className={`PortfolioFilter__nav ${toggle && 'open'}`}
        onClick={handleToggle}
      >
        <span className="PortfolioFilter__icons">
          <span className="line line01"></span>
          <span className="line line02"></span>
          <span className="line line03"></span>
          <span className="line line04"></span>
        </span>
      </button>
      <div className={`PortfolioFilter__work ${toggle && 'open'}`}>
        <button onClick={handleSelect} className="filter active">
          Top
        </button>
        <button onClick={handleSelect} className="filter">
          MERN
        </button>
        <button onClick={handleSelect} className="filter">
          React
        </button>
        <button onClick={handleSelect} className="filter">
          Node
        </button>
        <button onClick={handleSelect} className="filter">
          Javascript
        </button>
        <button onClick={handleSelect} className="filter">
          Web Design
        </button>
      </div>
    </div>
  );
};

export default PortfolioFilter;
