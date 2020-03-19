import React from 'react';

const CertificateItem = ({ title, info, duration, image, link }) => {
  return (
    <div className="CertificateItem col-md-6 col-lg-4 col-xs-12">
      <div className="CertificateItem__container">
        <img src={image} alt="CertificateItem Item" />
        <div className="CertificateItem__overlay">
          <div className="details">
            <span className="title">{title}</span>
            <span className="info">{info}</span>
            <span className="info">
              Duration: <strong>{`${duration} hours`}</strong>
            </span>
          </div>
          <span className="CertificateItem__btn--before"></span>
          <span className="CertificateItem__btn--after"></span>
          <a
            className="CertificateItem__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
