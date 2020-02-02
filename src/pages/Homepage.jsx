/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Hero from '../layout/home/Hero';
import Work from '../layout/home/Work';
import Detail from '../layout/home/Detail';
import Skill from '../layout/home/Skill';
import Footer from '../layout/Footer';

// Redux
import { getWork } from './../redux/actions/work';
import { getEducation } from './../redux/actions/education';

const Homepage = ({ works, educations, getWork, getEducation }) => {
  useEffect(() => {
    getWork();
    getEducation();
  }, []);

  return (
    <div className="Homepage">
      <div className="Homepage__content">
        <Hero />
        <Work />
        <Detail
          type="Professional Experience"
          content="A multi-skilled leader with hands-on experience in developing, leading and cofounding tech startups by bringing together vision, strategy, and execution in a totally unstructured and resource-constrained environment."
          items={works}
        />
        <Skill />
        <Detail
          type="Education & Voluteering"
          content="A multi-skilled leader with hands-on experience in developing, leading and cofounding tech startups by bringing together vision, strategy, and execution in a totally unstructured and resource-constrained environment."
          items={educations}
        />
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  works: state.work.works,
  educations: state.education.educations
});

export default connect(mapStateToProps, { getWork, getEducation })(Homepage);
