import React from 'react';
import SkillItem from '../../components/SkillItem';

const Skill = () => {
  return (
    <section className="Skill white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="title-small">
              <span>Skills</span>
            </h3>
            <p className="content-detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="col-md-9">
            <div>
              <SkillItem skillName="React" percentage="62%" />
              <SkillItem skillName="Ruby on Rails" percentage="50%" />
              <SkillItem skillName="NodeJS" percentage="82%" />
              <SkillItem skillName="Ruby" percentage="42%" />
              <SkillItem skillName="NextJS" percentage="92%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
