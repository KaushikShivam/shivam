import React from 'react';
import DetailCard from '../../components/DetailCard';

const Detail = ({ type, content, items }) => {
  return (
    <section className="grey-bg">
      <div className="container p-sm-0">
        <div className="row">
          <div className="col-lg-3 mt-2r">
            <h3 className="title-small">
              <span>{type}</span>
            </h3>
            <p className="content-detail">{content}</p>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {items.map((item, i) => (
                <DetailCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
