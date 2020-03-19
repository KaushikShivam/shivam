import React from 'react';
import rightArrow from './../assets/images/right-chevron.png';

const BlogItem = ({ noMargin, title, description, link, image, date }) => {
  return (
    <article className={`BlogItem ${!noMargin ? 'BlogItem--margin' : ''}`}>
      <div className="d-flex flex-column flex-lg-row">
        <div className="BlogItem__front animated fadeInUp delay-1">
          <img src={image} alt="Blog thumb" />
        </div>
        <div className="BlogItem__right animated fadeInUp delay-2">
          <div className="BlogItem__content">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="BlogItem__inner">
                <span className="BlogItem__date">{date}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={rightArrow} alt="right arrow" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
