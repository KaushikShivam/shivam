import React from 'react';

const DetailCard = () => {
  return (
    <div className="DetailCard col-md-6">
      <div>
        <div className="DetailCard__wrapper">
          <div className="DetailCard__card">
            <h2 className="DetailCard__year">2007 - 2009</h2>
            <p className="DetailCard__job">web designer</p>
            <p className="DetailCard__company">Corp Project</p>
            <hr className="my-4" />
            <div className="DetailCard__text">
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanita per seacula quarta decima et quinta decima. Eodem modo
                typi, qui nunc nobis videntur parum clari, fiant sollemnes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
