/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Hero from '../layout/home/Hero';
import Work from '../layout/home/Work';
import Detail from '../layout/home/Detail';

// Redux
import { getWork } from './../redux/actions/work';

const Homepage = ({ works, getWork }) => {
  useEffect(() => {
    getWork();
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  works: state.work.works
});

export default connect(mapStateToProps, { getWork })(Homepage);
