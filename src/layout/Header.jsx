import React from 'react';

const Header = ({ title, subtitle, image }) => {
  return (
    <div style={{ background: `url(${image})` }} className="Header">
      <div className="col-md-6 offset-md-6">
        <div className="row">
          <div className="Header__inner">
            <div className="Header__content">
              <h1>{title}</h1>
              <hr />
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
