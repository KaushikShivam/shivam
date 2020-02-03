import React from 'react';
import { Link } from 'react-router-dom';

const CertificateItem = () => {
  return (
    <div className="CertificateItem col-md-6 col-lg-4 col-xs-12">
      <div className="CertificateItem__container">
        <img
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-F0MRSNQ7.jpg?l=null"
          alt="CertificateItem Item"
        />
        <div className="CertificateItem__overlay">
          <div className="details">
            <span className="title">NodeJS</span>
            <span className="info">
              Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 Get
              certificate
            </span>
            <span className="info">
              Duration: <strong>44 Hours</strong>
            </span>
          </div>
          <span className="CertificateItem__btn--before"></span>
          <span className="CertificateItem__btn--after"></span>
          <Link className="CertificateItem__link" to="/portfolios/2"></Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
