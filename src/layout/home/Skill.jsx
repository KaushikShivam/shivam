import React from 'react';
import SkillItem from '../../components/SkillItem';

const skills = [
  { name: 'React', percentage: '88%' },
  { name: 'NodeJS', percentage: '80%' },
  { name: 'MongoDB', percentage: '75%' },
  { name: 'GraphQL', percentage: '68%' },
  { name: 'NextJS', percentage: '68%' },
  { name: 'Ruby On Rails', percentage: '75%' }
];

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
              In my years of experience, I've developed extensive knowledge in -
              Full-stack development, Prototyping and Wireframing, mobile app
              development and more. Here are my top skills.
            </p>
          </div>
          <div className="col-md-9">
            <div>
              {skills.map(({ name, percentage }) => (
                <SkillItem
                  key={name}
                  skillName={name}
                  percentage={percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
