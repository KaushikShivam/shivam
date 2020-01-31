import React from 'react';

const DetailCard = ({ item: { company, role, duration, tasks } }) => {
  return (
    <div className="DetailCard col-md-6">
      <div>
        <div className="DetailCard__wrapper">
          <div className="DetailCard__card">
            <h2 className="DetailCard__year">{duration}</h2>
            <p className="DetailCard__job">{role}</p>
            <p className="DetailCard__company">{company}</p>
            <hr className="my-4" />
            <div className="DetailCard__text">
              <ul>
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
