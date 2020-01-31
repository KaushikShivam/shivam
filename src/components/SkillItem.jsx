import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor';

const SkillItem = ({ skillName, percentage }) => {
  const [animate, toggleAnimate] = useState(false);

  return (
    <div className="SkillItem">
      <div className="SkillItem__title head-sm">{skillName}</div>
      <VizSensor
        onChange={isVisible => {
          toggleAnimate(isVisible);
        }}
      >
        <div
          className={`SkillItem__count-bar ${animate ? 'animate' : ''}`}
          style={{ width: percentage }}
        >
          <div className="SkillItem__count">
            <span>{percentage}</span>
          </div>
        </div>
      </VizSensor>
    </div>
  );
};

export default SkillItem;
