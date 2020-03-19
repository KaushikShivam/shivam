import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from './../assets/images/right-chevron.png';

const BlogItem = ({ noMargin }) => {
  return (
    <article className={`BlogItem ${!noMargin ? 'BlogItem--margin' : ''}`}>
      <div className="d-flex flex-column flex-lg-row">
        <div className="BlogItem__front animated fadeInUp delay-1">
          <img
            src="https://miro.medium.com/max/2488/1*YtncfH3ytlGBpwm5lMkNQw.png"
            alt="Blog thumb"
          />
        </div>
        <div className="BlogItem__right animated fadeInUp delay-2">
          <div className="BlogItem__content">
            <Link to="blogs/2">
              <div className="BlogItem__inner">
                <span className="BlogItem__date">9 Jan - 2020</span>
                <h2>How to create a Masonry Grid using pure CSS</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur voluptatibus laborum ipsam reiciendis, laboriosam
                  natus magnam eligendi ...
                </p>
                <img src={rightArrow} alt="right arrow" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
